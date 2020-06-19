import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { RaydService } from "../rayd.service";
import { LoginDetails } from "../login-details";
import { AppComponent } from "../app.component";
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private SpinnerService: NgxSpinnerService, private raysService: RaydService, private appComponenet: AppComponent, private router: Router) {
  }
// This function used for send all the details for login and get response
  async  login() {
    this.SpinnerService.show();
    this.raysService.loginDetails.setEmailId = this.loginForm.get('emailId').value;
    this.raysService.loginDetails.setPassword = this.loginForm.get('password').value;


    if (this.router.url == "/customerLogin")
      await this.raysService.customerLogin();
    if (this.router.url == "/adminLogin")
      this.raysService.adminLogin();
    if (this.router.url == "/ServiceProviderLogin")
      this.raysService.serviceProviderLogin();

    this.SpinnerService.hide();


  }

  ngOnInit() {

  }

}
