import { Component, OnInit } from '@angular/core';
import { ServiceproviderService } from '../../serviceprovider.service';
import { Router, RouterModule } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { RaydService } from 'src/app/rayd.service';
@Component({
  selector: 'app-sp-dashboard',
  templateUrl: './sp-dashboard.component.html',
  styleUrls: ['./sp-dashboard.component.css']
})
export class SpDashboardComponent implements OnInit {
  spId: number = this.raydService.serviceData.serviceProviderId;
  serviceProviderProfile: any;
  serviceProviderAddress: any;
  serviceProviderService: any;
  serviceProvideServiceCatagory: any;

  response1: any;

  constructor(private raydService: RaydService, private spService: ServiceproviderService) { }

  ngOnInit() {
    
    // Here we are gettiing detials of a particular service provider
    let resp1 = this.spService.displayServiceProviderProfile(this.spId);
    resp1.subscribe((data) => {
      this.serviceProviderProfile = data;
    });
  }
  // This function is for add product name 
  public addProductName(productName) {
    let resp2 = this.spService.addProduct(this.spId, productName);
    resp2.subscribe((data) => {
      this.response1 = data;
      alert(this.response1);
      this.ngOnInit();
    },
      error => {
        alert(error.error.message);
      }
    );

  }

}

