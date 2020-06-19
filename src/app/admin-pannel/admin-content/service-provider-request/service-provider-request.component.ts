import { Component, OnInit } from '@angular/core';
import { RaydService } from 'src/app/rayd.service';
import { ServiceProvider } from 'src/app/service-provider';

@Component({
  selector: 'app-service-provider-request',
  templateUrl: './service-provider-request.component.html',
  styleUrls: ['./service-provider-request.component.css']
})
export class ServiceProviderRequestComponent implements OnInit {

  constructor(private raydService: RaydService) {

  }
  serviceRequest;
  async ngOnInit() {
    // This function calling those service provider which is register but not verify
    await this.raydService.verifyServiceRequest();
    this.serviceRequest = this.raydService.verifyServiceRequestDetails;
  }
  i;

  // This variable for show and hide model
  view = false;

  // This function is for geting details for a particular service provider
  getDetails(event) {
    this.i = event;
    this.view = true
  }

  // This is the object of ServiceProvider class
  serviceProvider = new ServiceProvider();

  // This function is for send password to the service provider which is register there request
  async sendPassword(event) {
    this.serviceProvider.setServiceProviderId = event.serviceProviderId;
    this.serviceProvider.setEmailId = event.emailId;
    await this.raydService.sendLoginPassword(this.serviceProvider);
  }
}
