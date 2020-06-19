import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private router: Router) { }
  // This is the base url
  private baseURL = "http://localhost:8080/";

  // Get invoice details for a particular order 
  public getInvoice(orderId) {
    return this.http.post(this.baseURL + "getInvoice", orderId);
  }

  // This is for stripe payment gateway
  public chargeCard(token, grandTotal) {
    const headers = new HttpHeaders({ 'token': token });
    return this.http.post(this.baseURL + "charge", grandTotal, { headers: headers });
  }

  // This function is used to save feedback details
  public sendFeedback(srId: number, starValue: any, feedbackText: any) {
    const headers = new HttpHeaders({ 'starValue': starValue, 'feedbackText': feedbackText });
    return this.http.post(this.baseURL + "savefeedback", srId, { headers: headers, responseType: 'text' });
  }
  // This function is for save payment details with status
  savePaymentStatus(paymentObj1) {
    this.http.post(this.baseURL + "savePaymentData", paymentObj1)
      .subscribe(resp => {
      });
  }

  // Get all query
  public getAllQuery() {
    return this.http.get(this.baseURL + "getallquery");
  }

  // This function is used to send query response via mail to service provider
  public sendMail(queryId: number, adminMailText: any) {
    const headers = new HttpHeaders({ 'adminMailText': adminMailText });
    return this.http.post(this.baseURL + "sendmail", queryId, { headers: headers, responseType: 'text' });
  }

}


