import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { RaydService } from "../rayd.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-signup',
    templateUrl: './user-signup.component.html',
    styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

    submitted = false;
    signUpForm: FormGroup;
    constructor(private raydService: RaydService, private formBuilder: FormBuilder, private router: Router) {
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rePassword: ['', [Validators.required, Validators.minLength(6)]],
            phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            role: ['', Validators.required],
        });

    }
    get f() {
        return this.signUpForm.controls;
    }

    // This function return image for background
    getBgImage() {
        return "url('../../assets/img/background.svg')";
    }

    // This function is for set all details of user
    set() {
        this.submitted = true;
        if (this.signUpForm.invalid) {
            return;
        }
        this.raydService.signUpDetails.setFirstName = this.signUpForm.get('firstName').value;
        this.raydService.signUpDetails.setLastName = this.signUpForm.get('lastName').value;
        this.raydService.signUpDetails.setPassword = this.signUpForm.get('password').value;
        this.raydService.signUpDetails.setRoles = this.signUpForm.get('role').value;
        this.raydService.signUpDetails.setEmailId = this.signUpForm.get('email').value;
        this.raydService.signUpDetails.setPhoneNumber = this.signUpForm.get('phoneNumber').value;
        this.raydService.flagForCustomer = true;

        this.router.navigate(['addresspage']);
    }
}