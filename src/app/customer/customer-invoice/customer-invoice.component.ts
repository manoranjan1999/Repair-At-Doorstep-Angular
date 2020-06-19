import { Component, OnInit } from '@angular/core';
import { AppService }  from '../../app.service';
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas';
import { RaydService } from 'src/app/rayd.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-invoice',
  templateUrl: './customer-invoice.component.html',
  styleUrls: ['./customer-invoice.component.css'],
  providers: [DatePipe]
})
export class CustomerInvoiceComponent implements OnInit {
  orderId : number = 1;
  invoiceObj : any;
  partsObj : any;
  customerParts : any;
  totalPrice : number;
  subTotal : number = 0;
  taxAmount : number;
  grandTotal : number;
  serviceCharge;number;
  index;

myDate = new Date();
date;
  constructor(private toastr:ToastrService,private spinerService:NgxSpinnerService,private raydService : RaydService,private datePipe: DatePipe,private router:Router) {
    // It is used to get current date
    this.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
  invoiceDetails=[]

  async ngOnInit() {
    // It is calling to get all the details of invoice for paticular service request
    await this.raydService.getInvoiceDetails();
    this.invoiceDetails=this.raydService.invoiceDetails;
      for(var i in this.invoiceDetails) {
          this.totalPrice = +this.invoiceDetails[i][12] * +this.invoiceDetails[i][14];
          this.serviceCharge=this.invoiceDetails[i][13];
          this.subTotal = this.subTotal + this.totalPrice;     
      }
      this.taxAmount = Math.round(this.subTotal / 12);
      this.grandTotal = this.subTotal + Math.round(this.taxAmount)+ this.serviceCharge;
  }

  // This function is for genrate PDF
  public generatePdf() {
    var data = document.getElementById('invoiceForm');
    html2canvas(data).then((canvas) =>{
      var imgWidth = 208;
      var pageHeight =296;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF("p", "mm", "a4");
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('File.pdf');
      this.toastr.success("Downloaded.",'Success')
      this.router.navigate(["feedback"]);
      
    });

    
  }

}
