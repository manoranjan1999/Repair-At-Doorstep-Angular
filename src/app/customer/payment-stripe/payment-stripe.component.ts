import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Payment } from '../../customer/payment-stripe/payment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaymentStatus } from '../payment-stripe/paymentstatus';
import { Router } from '@angular/router';
import { FeedbackComponent } from '../feedback/feedback.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { RaydService } from 'src/app/rayd.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-stripe',
  templateUrl: './payment-stripe.component.html',
  styleUrls: ['./payment-stripe.component.css']
})

export class PaymentStripeComponent implements OnInit {
  srId: number;

  grandTotal: number;
  paymentObject: any;

  private paymentObj: Payment = new Payment();
  constructor(private toastr: ToastrService, private raydService: RaydService, private customerService: AppService, private router: Router, private zone: NgZone, private SpinnerService: NgxSpinnerService) { }


  paymentForm = new FormGroup({
    cardName: new FormControl('', Validators.required),
    cardNumber: new FormControl('', Validators.required),
    expMonth: new FormControl('', Validators.required),
    expYear: new FormControl('', Validators.required),
    cvc: new FormControl('', Validators.required),
  });
  totalPrice = 0;
  serviceCharge = 0;
  subTotal = 0;
  taxAmount = 0;
  sr: number;
  async ngOnInit() {
    // we are getting request id from local sessionStorage
    var s = sessionStorage.getItem('requestId');
    this.srId = +s;
    this.sr = +s;
    this.SpinnerService.show()
    this.srId = this.raydService.requestId;


    // This function is to get inovice details
    await this.raydService.getInvoiceDetails();
    for (var i in this.raydService.invoiceDetails) {
      this.totalPrice = +this.raydService.invoiceDetails[i][12] * +this.raydService.invoiceDetails[i][14];
      this.serviceCharge = this.raydService.invoiceDetails[i][13];
      this.subTotal = this.subTotal + this.totalPrice;
    }
    this.taxAmount = Math.round(this.subTotal / 12);
    this.grandTotal = this.subTotal + Math.round(this.taxAmount) + this.serviceCharge;
    this.SpinnerService.hide();
  }

  // This function is for Stripe payment
  public chargeCreditCard() {

    this.SpinnerService.show();
    (<any>window).Stripe.card.createToken({
      number: this.paymentObj.cardNumber,
      exp_month: this.paymentObj.expMonth,
      exp_year: this.paymentObj.expYear,
      cvc: this.paymentObj.cvc
    }, (status: number, response: any) => {
      if (status === 200) {
        let token = response.id;
        // alert(token);
        let resp1 = this.customerService.chargeCard(token, this.grandTotal);
        resp1.subscribe(resp => {
          this.paymentObject = resp;
          let transactionId = this.paymentObject.id;
          let grandTotal = this.paymentObject.amount / 100;
          let status = this.paymentObject.paid;
          let paymentObj1: PaymentStatus = new PaymentStatus(this.sr, transactionId, grandTotal, status);
          this.customerService.savePaymentStatus(paymentObj1);
          this.SpinnerService.hide();
          this.toastr.success("Your transaction is successful.", 'Success')
          this.zone.run(() => this.router.navigate(['repairinvoice']));
        });
      } else {

        alert(response.error.message);
      }
    });

  }
}
