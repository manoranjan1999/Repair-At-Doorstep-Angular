import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RaydService } from '../rayd.service';
import { Chart } from "chart.js";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  addProblemForm: FormGroup;
  addressForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private raydService: RaydService, private router: Router) {
    this.addProblemForm = this.formBuilder.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      modelNumber: ['', Validators.required],
      description: ['', Validators.required],
      companyName: ['', Validators.required],
    });
    this.addressForm = this.formBuilder.group({
      locality: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      landmark: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{6}$")]],
      addressType: ['', Validators.required]
    });
  }
  addressData;
  notification;
  userName;
  emailId;
  portfolioData;
  PieChart = [];
  BarChart = [];
  paymentData;
  public now: Date = new Date();

  async ngOnInit() {
    // Validate user is login or not
    if ((sessionStorage.getItem("userId")) == null) {
      this.toastr.warning("Please Login first", 'Warning');
      this.router.navigate(["/"]);
    }
    // Get current date
    this.now = new Date();
    this.notification = 1;

    // Get all the request 
    this.raydService.getRequest();

    // Get all Not Completed Payment request
    await this.raydService.getNotCompletedPayment();
    this.paymentData = this.raydService.paymentData;

    // Get all request type for draw chart
    await this.raydService.getrequestTypeOfUser();

    // Draw chart
    this.PieChart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ["Electronics", "Furniture", "Plumber", "Mechanic"],
        datasets: [{
          label: 'Pie Chart',
          data: this.raydService.requestTypeOfAUser[0],
          backgroundColor: [
            'ORANGE',
            'BLUE',
            'GREEN',
            'PINK'
          ],
        }]
      },
      options: {
        title: {
          text: "Pie Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    })

    this.BarChart = new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ["Electronics", "Furniture", "Plumber", "Mechanic"],
        datasets: [{
          label: 'Bar Chart',
          data: this.raydService.requestTypeOfAUser[0],
          backgroundColor: [
            'ORANGE',
            'BLUE',
            'GREEN',
            'PINK'
          ],
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    })
  }
  // Get all the address for a particular user
  fetchAddress() {
    this.raydService.getAddress();
  }

  // This function is for save service request details
  addProblemData() {
    this.raydService.addProblem.setProductName = this.addProblemForm.get('productName').value;
    this.raydService.addProblem.setProductType = this.addProblemForm.get('productType').value;
    this.raydService.addProblem.setModelNumber = this.addProblemForm.get('modelNumber').value;
    this.raydService.addProblem.setDescription = this.addProblemForm.get('description').value;
    this.raydService.addProblem.setCompanyName = this.addProblemForm.get('companyName').value;
    this.raydService.addProblem.setUserId = (sessionStorage.getItem("userId"));
  }
  // Save new address
  address() {
    this.addressData = this.raydService.addressResult;
  }

  // Get previous address details
  addressValue(event: any) {
    this.raydService.addProblem.setCurrentLocation = event.currentLocation;
    this.raydService.addProblem.setCompleteAddress = event.completeAddress
    this.raydService.addProblem.setPinCode = event.pinCode;
    this.raydService.addProblem.addressId = event.addressId;

    // function is call to add service request
    this.raydService.addProblemRequset();
    this.raydService.getRequest();
  }

  // Add new address
  addNewAddress() {
    var address = this.addressForm.get('address').value + "," + this.addressForm.get('landmark').value + ", " + this.addressForm.get('city').value + ", " + this.addressForm.get('state').value;
    this.raydService.addProblem.setCompleteAddress = address;
    this.raydService.addProblem.setCurrentLocation = this.addressForm.get('locality').value;
    this.raydService.addProblem.setPinCode = this.addressForm.get('pinCode').value;
    this.raydService.addProblem.addressId = 0;

     // function is call to add service request
    this.raydService.addProblemRequset();
    this.raydService.getRequest();
  }

  // This function is call to Get user details
  getUser() {
    this.userName = this.raydService.userData.firstName + " " + this.raydService.userData.lastName;
    this.emailId = this.raydService.userData.emailId;
  }
  // This function is call to Get portfolio details
  portfolioDetails() {
    this.portfolioData = this.raydService.problemRequested;
    console.log(this.portfolioData);
  }

  // Here all the function check status of the request
  active = "";
  open(status) {
    if (status == 'OPEN') {
      this.active = "active";
      return true;
    }
    else {
      this.active = "";
      return false;
    }
  }
  accepted(status) {

    if (status == 'ACCEPTED') {
      this.active = "active";
      return true;
    }
    else {
      this.active = "";
    }

  }
  completed(status) {
    if (status == 'COMPLETED') {
      this.active = "active";
      return true;
    }
    else {
      this.active = "";
    }
  }
  visited(status) {
    if (status == 'VISITED') {
      this.active = "active";
      return true;
    }
    else {
      this.active = "";
    }
  }

  // This function get visiting message with status to show in the notification
  visitingMessage;
  async notifiaction() {
    await this.raydService.getVistingDetails();
    this.visitingMessage = this.raydService.vistingMessage;
    console.log(this.visitingMessage)

  }

  // This function is set request id for payment using stripe
  setRequestId(requestId) {
    sessionStorage.setItem("requestId", requestId);
    this.router.navigate(["paystripe"]);
  }
   // This function is set request id for payment using paytm
  async setRequestIdForPaytm(requestId) {
    sessionStorage.setItem("requestId", requestId);
    await this.raydService.getInvoiceDetails();
    this.router.navigate(["payPaytm"]);
  }

  view = true;
  // This is for hide and show portofilo
  dashboard() {
    this.view = true;
    this.ngOnInit();
  }


  // This function is get all the details to show in portofilo with address and status and tracking details
  potfolioDetails1;
  async getPortfolioDetails() {
    this.view = false;
    await this.raydService.getServiceRequestDetails();
    this.potfolioDetails1 = this.raydService.portfolioDetails1;
  }

  // This function is for get invoice details 
  getInvoice(requestId) {
    sessionStorage.setItem("requestId", requestId);
    this.raydService.requestId = requestId;
    this.router.navigate(["repairinvoice"]);
  }

  totalAmount(amount) {
    if (amount == null)
      return false;
    else
      return true;

  }
  request;
  j;
  serviceRequest = false;
  techData;

  // This functiom is for get technician details for a particular request
  async requestDetails(data, i) {
    this.request = data;
    this.j = i;
    if (data.technicianId != 0) {
      await this.raydService.getTechnicianDetails(data.technicianId);
      this.techData = this.raydService.tecnicianDetails;
    }
    else
      this.techData = null;
    this.serviceRequest = true;
  }

  // Free user details for logout
  logOut() {
    sessionStorage.removeItem("userId");
    this.router.navigate(["/"]);
  }


}
