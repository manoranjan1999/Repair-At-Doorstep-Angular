import { Injectable } from '@angular/core';
import { SignUpDetails } from "./sign-up-details";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDetails } from "./login-details";
import { ServiceProvider } from "./service-provider";
import { Router } from '@angular/router';
import { AddProblem } from './add-problem';
import { VisitingDetails } from './visiting-details';
import { OrderDetails } from './order-details';
import { ToastrService } from 'ngx-toastr';
import { TechnicianDetails } from "./technician";

@Injectable({
  providedIn: 'root'
})
export class RaydService {

  constructor(private toastr: ToastrService,private http: HttpClient,private router:Router) { 
  }
  flagForCustomer = false;
  flagForServiceProvider = true;
  invoiceDetails;
  serviceCharge=0;
  subTotal=0;
  taxAmount=0;
  totalPrice=0;
  grandTotal : number;

  /* This variable is for storing the service request ID */
  requestId;

  /* Base url */
  url = "http://localhost:8080/";

  /* Object of  SignUpDetails class*/
  signUpDetails = new SignUpDetails();

  /* This function for Customer registration */
  signUp() {
    var URL = this.url+'signUp'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.signUpDetails.getEmailId + ':' + this.signUpDetails.getPassword) });
    this.http.post(URL, this.signUpDetails, { responseType: 'text' as 'json' }).subscribe(
      (result) => {
        console.log(result)
        this.toastr.success("Registered successfully",'Success')
        this.router.navigate(['customerLogin']);
      },
      err => {
        var data=JSON.parse(err.error);
        this.toastr.error(data.Message,'Error')
        this.router.navigate(['customerLogin']);

      }
    )
    this.flagForCustomer = false;
  }

  /* This is the object of LoginDetails class */
  loginDetails = new LoginDetails();
  userData;

  /* this function is for customer login */
  async customerLogin() {
    var URL = this.url+'signIn'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.loginDetails.getEmailId + ':' + this.loginDetails.getPassword) });
    this.http.post(URL, this.loginDetails, { headers, responseType: 'text' }).subscribe(
      (result) => {
        this.userData = JSON.parse(result); 
        sessionStorage.setItem("userId", this.userData.userId);
        this.toastr.success("Login successfully",'Success')
        this.router.navigate(['userDashboard']);
        
      },
      err => {
        this.toastr.error("Something wrong with username and password",'Error')
      }
    )
  }

  /* This function is for admin login */
  adminLogin(){
    var URL = this.url+'adminLogin';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.loginDetails.getEmailId + ':' + this.loginDetails.getPassword) });
    this.http.post(URL, this.loginDetails, { headers, responseType: 'text'}).subscribe(
      (result) => { 
        this.toastr.success("Login successfully",'Success')
        this.router.navigate(['admin']);
      },
      err => {
        this.toastr.error("Something wrong with username and password",'Error')
      }
    )

  }

  /* This function is for service provider login */
  serviceData;
  serviceProviderLogin(){
    var URL = this.url+'serviceProviderLogin'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.loginDetails.getEmailId + ':' + this.loginDetails.getPassword) });
    this.http.post(URL, this.loginDetails, { headers, responseType: 'text' }).subscribe(
      (result) => {
        this.serviceData = JSON.parse(result); 
        this.toastr.success("Login successfully",'Success')
        this.router.navigate(['serviceProvider']);
        
      },
      err => {
        this.toastr.error("Something wrong with username and password",'Error')
      }
    )
  }
  // This is the object of Service Provider class
  serviceProvider=new ServiceProvider();

  /* This function is registration for service provider*/
  signUpForServiceProvider(){
    var URL = this.url+'serviceProviderRequest'
    this.http.post(URL, this.serviceProvider, { responseType: 'text' as 'json' }).subscribe(
      (result) => {
        console.log(result)
        this.toastr.success("Request registerd successfully",'Success')
        this.router.navigate(['ServiceProviderLogin']);
      },
      err => {
        this.toastr.error("Something wrong",'Error')
      }
    )
  }
  /* This function get all the address of a particular user/customer */
  addressResult;
  async  getAddress(){
    var URL = this.url+'getAddress?userId='+(sessionStorage.getItem("userId"));
    this.addressResult=await this.http.get(URL).toPromise();
  }

  /* This is the object of AddProblem class */
  addProblem=new AddProblem();

  /* This function is to request a problem */
  addProblemRequset(){
    var URL = this.url+'addProblem'
      this.http.post(URL, this.addProblem, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          this.toastr.success("Request registerd successfully",'Success')
        },
        err => {
          this.toastr.error("Something wrong",'Error')
        }
      )
  }

  /* This function is to get all requested problem */
  problemRequested;
  async  getRequest(){
    var URL = this.url+'getProblem?userId='+(sessionStorage.getItem("userId"));
    this.problemRequested=await this.http.get(URL).toPromise();
    console.log(this.problemRequested)
  }

  /* This function get all the details of request which is not accepted */
  openRequest;
  async getOpenRequest(){
    var URL = this.url+'openRequest';
    this.openRequest=await this.http.get(URL).toPromise();
  }

  /* This function update the status if someone is accept the request */
  async acceptRequest(requestData){
    var URL = this.url+'assignServiceProvider'
      this.http.post(URL, requestData, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          this.toastr.success("Accepted successfully",'Success')
        },
        err => {
          this.toastr.warning("Already Accepted", 'Warning');
        }
      )
  }

  /* This function is for get all the accepted request for a particular service provider */
  servicesProblem;
  async getAcctedService(){
    var URL = this.url+'getServices?serviceProviderId='+this.serviceData.serviceProviderId;
    this.servicesProblem= await this.http.get(URL).toPromise();

  }

  /* This function save the visiting details */
  visitingDetails=new VisitingDetails();
  async saveStatus(){
    var URL = this.url+'visitingDetails'
      this.http.post(URL, this.visitingDetails, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          this.toastr.success("Review Added",'Success')
        },
        err => {
          this.toastr.error("Something wrong",'Error')
        }
      )
  }

  /* This function is for save Revisit message*/
  saveRevisit(){
    var URL = this.url+'reVisitingDetails'
      this.http.post(URL, this.visitingDetails, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          this.toastr.success("Review Added",'Success')
        },
        err => {
          this.toastr.error("Something wrong",'Error')
  
        }
      )
  }

  /* This is the object of TechnicianDetails class*/
  technician=new TechnicianDetails();

  /* This function is to save technician details */
  async saveTechnician(){
    var URL = this.url+'assignTechnician'
    this.http.post(URL, this.technician, { responseType: 'text' as 'json' }).subscribe(
      (result) => {
        this.toastr.success("Technician Added",'Success')
      },
      err => {
        this.toastr.error("Something wrong",'Error')
      }
    )
  }

  /* This function is save parts details if request is completed */
   orderDetails=[];
   async saveOrderDetails(){
    var URL = this.url+'orderDetails'
      this.http.post(URL, this.orderDetails, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          this.toastr.success("Parts Added",'Success')
        },
        err => {
          this.toastr.error("Something wrong",'Error')
  
        }
      )
  }

  /* This function is to get all new registration of service provider */
  verifyServiceRequestDetails;
  async verifyServiceRequest(){
    var URL = this.url+'varify';
    this.verifyServiceRequestDetails=await this.http.get(URL).toPromise();

  }

  /* Send password to newly Registerd service provider  */
 async sendLoginPassword(serviceProvider){
    var URL = this.url+'sendPassword'
      this.http.post(URL, serviceProvider, { responseType: 'text' as 'json' }).subscribe(
        (result) => {
          this.toastr.success("Password send",'Success')
        },
        err => {
          this.toastr.error("Something wrong",'Error')
  
        }
      )
  }

  /* This function get all the visiting message for a particular user */
  vistingMessage;
  async getVistingDetails(){
    var URL = this.url+'review?userId='+(sessionStorage.getItem("userId"));
    this.vistingMessage=await this.http.get(URL).toPromise();
    console.log(this.vistingMessage)
  }

  /* This function get sum of all type of request for draw chart */
  requestType;
  async getrequestType(){
    var URL=this.url+'countType';
    this.requestType=await this.http.get(URL).toPromise();
    console.log(this.requestType[0]);
  }

  /* This function get sum of all type of request for a particular user to draw chart */
  requestTypeOfAUser;
  async getrequestTypeOfUser(){
    var URL=this.url+'countTypeOfAUser?userId='+(sessionStorage.getItem("userId"));
    this.requestTypeOfAUser=await this.http.get(URL).toPromise();
  }

  /* This function get the request which has completed but payment is not done */
  paymentData;
  async getNotCompletedPayment(){
    var URL=this.url+'getPaymentStatus?userId='+(sessionStorage.getItem("userId"));
    this.paymentData=await this.http.get(URL).toPromise();
  }

  /* This function is for change the password */
  changePassword(data){
    var URL = this.url+'changePassword'
    this.http.post(URL, data, { responseType: 'text' as 'json' }).subscribe(
      (result) => {
        console.log(result)
        this.toastr.success("password change succsessful",'Success')
        this.router.navigate(['customerLogin']);
      },
      err => {
        this.toastr.error("Something wrong",'Error')
      }
    )

  }

  /* This function is to get all service provider */
  allServiceProvider;
 async getAllServiceProvider(){
    var URL=this.url+'allServiceProvder';
    this.allServiceProvider=await this.http.get(URL).toPromise();
  }

  /* This function is to get all Customer */
  allCustomer;
  async getAllCustomer(){
    var URL=this.url+'allCustomer';
    this.allCustomer=await this.http.get(URL).toPromise();
    console.log(this.allCustomer);

  }

  /* This function is to get invoice details for a particular request */
  async getInvoiceDetails(){
    var URL=this.url+'getInvoice?serviceRequestId='+(sessionStorage.getItem("requestId"));
    this.invoiceDetails=await this.http.get(URL).toPromise();
    for(var i in this.invoiceDetails) {
        this.totalPrice = +this.invoiceDetails[i][12] * +this.invoiceDetails[i][14];
        this.serviceCharge=this.invoiceDetails[i][13];
        this.subTotal = this.subTotal + this.totalPrice;     
    }
    this.taxAmount = Math.round(this.subTotal / 12);
    this.grandTotal = this.subTotal + Math.round(this.taxAmount)+ this.serviceCharge;
    sessionStorage.setItem("grandTotal",this.grandTotal+"");
  }

  /* This function is to get Service request details for a particular user */
  portfolioDetails1;
  async getServiceRequestDetails(){
    var URL=this.url+'getPortfolioDetails?userId='+(sessionStorage.getItem("userId"));
    this.portfolioDetails1=await this.http.get(URL).toPromise();
    console.log(this.portfolioDetails1);

  }

  /* This function is to get technicaian detials for a particular techincian based on technicianId */
  tecnicianDetails;
  async getTechnicianDetails(technicianId){
    var URL=this.url+'getTechnician?technicianId='+technicianId;
    this.tecnicianDetails=await this.http.get(URL).toPromise();
  }
}
