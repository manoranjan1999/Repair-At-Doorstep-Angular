import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { RaydService } from "../rayd.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-service-provide-signup',
    templateUrl: './service-provide-signup.component.html',
    styleUrls: ['./service-provide-signup.component.css']
})
export class ServiceProvideSignupComponent implements OnInit {
    serviceProviderForm: FormGroup;
    submitted = false;

    constructor(private raydService: RaydService, private formBuilder: FormBuilder, private router: Router) { }
    ngOnInit() {
        this.serviceProviderForm = this.formBuilder.group({
            serviceProviderName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            productType: ['', Validators.required],
            productName: ['', Validators.required],
        });
    }

    // This function return serviceProviderForm controls
    get f() {
        return this.serviceProviderForm.controls;
    }

    // This function is for save Service provider details
    set() {
        this.submitted = true;
        if (this.serviceProviderForm.invalid) {
            return;
        }
        this.raydService.serviceProvider.setProductName = this.serviceProviderForm.get('productName').value;
        this.raydService.serviceProvider.setServiceProviderName = this.serviceProviderForm.get('serviceProviderName').value;
        this.raydService.serviceProvider.setProductType = this.serviceProviderForm.get('productType').value;
        this.raydService.serviceProvider.setEmailId = this.serviceProviderForm.get('email').value;
        this.router.navigate(['addresspage']);
    }



}