import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpSidebarComponent } from './sp-sidebar/sp-sidebar.component';
import { SpDashboardComponent } from './main-content/sp-dashboard/sp-dashboard.component';
import {  ServiceProviderServiceComponent } from './main-content/service-provider-service/service-provider-service.component';
import { CustomerFeedbackComponent } from './main-content/customer-feedback/customer-feedback.component';
import { SpQueryComponent } from './main-content/sp-query/sp-query.component';
import { RouterModule } from '@angular/router';
import { ServiceproviderComponent } from './serviceprovider.component';
import { HttpClientModule } from '@angular/common/http';
import { TechnicianModule } from './main-content/technician/technician.module';
import { IncomingRequestComponent } from './main-content/incoming-request/incoming-request.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    ServiceproviderComponent,
    SpSidebarComponent,
    SpDashboardComponent,
    IncomingRequestComponent,
    ServiceProviderServiceComponent,
    CustomerFeedbackComponent,
    SpQueryComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TechnicianModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ]
})
export class ServiceproviderModule { }
