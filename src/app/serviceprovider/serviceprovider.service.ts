import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SpQuery } from "./main-content/sp-query/sp-query";
@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {

  private baseURL = "http://localhost:8080/";
  constructor(private http: HttpClient, private router: Router) { }

  // This function used to get profile for a particular service provider
  public displayServiceProviderProfile(spId) {
    return this.http.post(this.baseURL + "displayProfile", spId);
  }

  // This function is used to save technician details
  public saveTechieData(technicianObj) {
    return this.http.post(this.baseURL + "saveTechnician", technicianObj);
  }
  // This function is used to get technician details
  public getTechnicianData(id) {
    return this.http.post(this.baseURL + "displayTechnician", id);
  }
  // This function is used to add product for a particular service provider
  public addProduct(spId, productName) {
    const headers = new HttpHeaders({ 'productName': productName });
    return this.http.post(this.baseURL + "addProductName", spId, { headers: headers, responseType: 'text' });
  }

  // This function is used to get customer feedback details
  public getFeedback(spId: number) {
    return this.http.post(this.baseURL + "getallfeedback", spId);
  }

  // This function is used to get username
  public getUserName(userId: number) {
    return this.http.post(this.baseURL + "getUserName", userId, { responseType: 'text' });
  }

  // This function is used to get service provider details
  public getSpDetails(spId: number) {
    console.log("hi");
    return this.http.post(this.baseURL + "getspdetails", spId);
  }

  // This function is used to save service provider query details
  public saveQuery(spQueryObj: SpQuery) {
    this.http.post(this.baseURL + "savequery", spQueryObj, { responseType: 'text' })
      .subscribe((msg) => {
        alert(msg);
      });
  }
}
