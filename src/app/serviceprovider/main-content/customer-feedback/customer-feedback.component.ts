// import { Component, OnInit } from '@angular/core';
// import { ServiceproviderService } from '../../serviceprovider.service';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { RaydService } from 'src/app/rayd.service';

// @Component({
//   selector: 'app-customer-feedback',
//   templateUrl: './customer-feedback.component.html',
//   styleUrls: ['./customer-feedback.component.css']
// })
// export class CustomerFeedbackComponent implements OnInit {
//   s : number = 0;
//   spId : number = this.raydService.serviceData.serviceProviderId;
//   allFeedbackObj : any;
//   userId : any = [];
//   customerName : any = [];
//   productName : any = [];
//   description : any = [];
//   feedbackText : any = [];

//   constructor(private raydService:RaydService,private spService:ServiceproviderService,private spinnerService: NgxSpinnerService) { }

//   ngOnInit() {
//     this.spinnerService.show();
//     let resp1 = this.spService.getFeedback(this.spId);
//     resp1.subscribe((data) => {
//       this.allFeedbackObj = data;
//       console.log(this.allFeedbackObj);
//       var l=0;

//       for(var k=0; k < this.allFeedbackObj.length; k++) {

//         if(this.allFeedbackObj[k].feedback != null) {
//           this.userId[l] = this.allFeedbackObj[k].userId;
//           this.productName[l] = this.allFeedbackObj[k].productName;
//           this.description[l] = this.allFeedbackObj[k].description;
//           this.feedbackText[l] = this.allFeedbackObj[k].feedback.feedbackText;
//           l++;
//           console.log(k)
//         }
//       }
//       for(var n = 0; n < this.userId.length; n++) {
//         let uId = this.userId[n];
//         let resp2 = this.spService.getUserName(uId);

//         resp2.subscribe((data1) => {
//           this.customerName[this.s] = data1;
//           this.s = this.s + 1;
//         });
//       }
//       // console.log(this.customerName);
//       // console.log(this.userId);
//       // console.log(this.productName);
//       // console.log(this.description);
//       // console.log(this.feedbackText);
//     });
//     this.spinnerService.hide();
//   }


// }
import { Component, OnInit } from '@angular/core';
import { ServiceproviderService } from '../../serviceprovider.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { RaydService } from 'src/app/rayd.service';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent implements OnInit {
  s: number = 0;
  spId: number = this.raydService.serviceData.serviceProviderId;
  allFeedbackObj: any;
  userId: any = [];
  customerName: any = [];
  productName: any = [];
  description: any = [];
  feedbackText: any = [];
  ratingStars: any = [];

  constructor(private raydService: RaydService, private spService: ServiceproviderService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();

    // This is get all the details of customer feddback for a particular service provider
    let resp1 = this.spService.getFeedback(this.spId);
    resp1.subscribe((data) => {
      this.allFeedbackObj = data;
      var l = 0;
      for (var k = 0; k < this.allFeedbackObj.length; k++) {

        if (this.allFeedbackObj[k].feedback != null) {
          this.userId[l] = this.allFeedbackObj[k].userId;
          this.productName[l] = this.allFeedbackObj[k].productName;
          this.description[l] = this.allFeedbackObj[k].description;
          this.feedbackText[l] = this.allFeedbackObj[k].feedback.feedbackText;
          this.ratingStars[l] = this.allFeedbackObj[k].feedback.stars;
          l++;
        }
      }

      for (var n = 0; n < this.userId.length; n++) {
        let uId = this.userId[n];
        let resp2 = this.spService.getUserName(uId);

        resp2.subscribe((data1) => {
          this.customerName[this.s] = data1;
          this.s = this.s + 1;
        });
      }
    });
    this.spinnerService.hide();
  }


}
