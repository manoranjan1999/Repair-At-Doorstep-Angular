import { Component, OnInit, NgZone } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
import { RaydService } from 'src/app/rayd.service';

@Component({
      selector: 'app-payment-paytm',
      templateUrl: './payment-paytm.component.html',
      styleUrls: ['./payment-paytm.component.css']
})
export class PaymentPaytmComponent implements OnInit {

      constructor(private raydService: RaydService, private zone: NgZone, private http: HttpClient) { }

      ngOnInit() {
       this.submitForm();
      }
      // This is a paytm object to keep all the details of payment like total amount etc 
      paytm = {
            MID: "ERkVJY50814905059917",
            WEBSITE: "WEBSTAGING",
            INDUSTRY_TYPE_ID: "Retail",
            CHANNEL_ID: "WEB",
            ORDER_ID: (sessionStorage.getItem("requestId")), //Do change Here
            CUST_ID: "CUST0088",
            MOBILE_NO: "7008269224",
            EMAIL: "manoranjan.mohanty1999@gmail.com",
            TXN_AMOUNT: (sessionStorage.getItem("grandTotal")), //Do change here
            CALLBACK_URL: "http://localhost:8080/pgresponsepaytm",
      };
      submitForm() {
            //Do API call and get CHECKSUMHASH.
            this.http.post('http://localhost:8080/createchecksum', this.paytm, { responseType: 'text' })
                  .subscribe((res) => {
                        console.log(res);
                        this.paytm['CHECKSUMHASH'] = res;
                        this.createPaytmForm();
                  });
      }

      // This function is used to redirect into paytm payment page
      createPaytmForm() {
            const my_form: any = document.createElement('form');
            my_form.name = 'paytm_form';
            my_form.method = 'post';
            my_form.action = 'https://securegw-stage.paytm.in/order/process';

            const myParams = Object.keys(this.paytm);
            for (let i = 0; i < myParams.length; i++) {
                  const key = myParams[i];
                  let my_tb: any = document.createElement('input');
                  my_tb.type = 'hidden';
                  my_tb.name = key;
                  my_tb.value = this.paytm[key];
                  my_form.appendChild(my_tb);
            };

            document.body.appendChild(my_form);
            my_form.submit();
      };


}