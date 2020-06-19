import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceproviderModule } from './serviceprovider/serviceprovider.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CustomerInvoiceComponent } from './customer/customer-invoice/customer-invoice.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ServiceProvideSignupComponent } from './service-provide-signup/service-provide-signup.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserSignupComponent } from './customer-signup/user-signup.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { AdminSideBarComponent } from './admin-pannel/admin-side-bar/admin-side-bar.component';
import { AdminContentComponent } from './admin-pannel/admin-content/admin-content.component';
import { AddressComponent } from './address/address.component';
import { ServiceProviderRequestComponent } from './admin-pannel/admin-content/service-provider-request/service-provider-request.component';
import { AllServiceProviderComponent } from './admin-pannel/admin-content/all-service-provider/all-service-provider.component';
import { AllCustomerComponent } from './admin-pannel/admin-content/all-customer/all-customer.component';
import { AllServiceRequestComponent } from './admin-pannel/admin-content/all-service-request/all-service-request.component';
import { FeedbackComponent } from './customer/feedback/feedback.component';
import { PaymentStripeComponent } from './customer/payment-stripe/payment-stripe.component';
import { AllQueriesComponent } from './admin-pannel/admin-content/all-queries/all-queries.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { PaymentPaytmComponent } from './customer/payment-paytm/payment-paytm.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    UserSignupComponent,
    ServiceProvideSignupComponent,
    HeaderComponent,
    AddressComponent,
    FooterComponent,
    HomepageComponent,
    ChangePasswordComponent,
    CustomerInvoiceComponent,
    PaymentStripeComponent,
    UserDashboardComponent,
    AdminContentComponent,
    AdminSideBarComponent,
    AdminPannelComponent,
    ServiceProviderRequestComponent,
    AllServiceProviderComponent,
    AllCustomerComponent,
    AllServiceRequestComponent,
    FeedbackComponent,
    AllQueriesComponent,
    PaymentPaytmComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceproviderModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(
      {
      positionClass:'toast-top-center',
      closeButton: true,
      
      }
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
