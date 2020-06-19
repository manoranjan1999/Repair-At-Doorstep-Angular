import { Component, OnInit } from '@angular/core';
import { RaydService } from 'src/app/rayd.service';
import { FormGroup, FormControl, FormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { OrderDetails } from 'src/app/order-details';
import { ServiceproviderService } from '../../serviceprovider.service';
import { Technician } from '../technician/technician';

@Component({
  selector: 'app-service-provider-service',
  templateUrl: './service-provider-service.component.html',
  styleUrls: ['./service-provider-service.component.css']
})
export class ServiceProviderServiceComponent implements OnInit {
  public statusForm: FormGroup;
  public productList: FormArray;
  serviceProviderProfile: any;
  constructor(private raydService: RaydService, private fb: FormBuilder, private spService: ServiceproviderService) { }

  servicesRequest;
  async ngOnInit() {
    this.statusForm = this.fb.group({
      status: new FormControl(''),
      reviewMessage: new FormControl(''),
      serviceCharge: new FormControl(''),
      tech: new FormControl(''),
      revisitingMessage: new FormControl(''),
      products: this.fb.array([this.createProduct()]),

    })
    this.productList = this.statusForm.get('products') as FormArray;


    await this.raydService.getAcctedService();
    this.servicesRequest = this.raydService.servicesProblem

    let resp1 = this.spService.displayServiceProviderProfile(this.raydService.serviceData.serviceProviderId);
    resp1.subscribe((data) => {
      this.serviceProviderProfile = data;
      console.log(this.serviceProviderProfile);
    });
  }
  service;
  visited = false;
  completed = false;
  reVisit = false;
  technician = false
  view = false;
  async details(event) {
    this.service = event;
    console.log(event[0])
    this.view = true;

  }

  createProduct(): FormGroup {
    return this.fb.group({
      parts: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      quantity: [null, Validators.compose([Validators.required])],
    });
  }
  // add a contact form group
  addProduct() {
    this.productList.push(this.createProduct());
  }

  // remove contact from group
  removeProduct(index) {
    this.productList.removeAt(index);
  }

  get productFormGroup() {
    return this.statusForm.get('products') as FormArray;
  }

  // get the formgroup under contacts form array
  getProductsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.productList.controls[index] as FormGroup;
    return formGroup;
  }

  visit() {

    if (this.statusForm.get('status').value == "visit") {
      this.completed = false;
      this.technician = false;
      this.reVisit = false;
      this.visited = true;
    }
    else if (this.statusForm.get('status').value == "complete") {
      this.visited = false;
      this.technician = false;
      this.reVisit = false;
      this.completed = true;
    }
    else if (this.statusForm.get('status').value == "technician") {
      this.visited = false;
      this.reVisit = false;
      this.completed = false;
      this.technician = true;
    }
    else if (this.statusForm.get('status').value == "reVisit") {
      this.visited = false;
      this.technician = false;
      this.completed = false;
      this.reVisit = true;
    }
  }
  complete() {
  }
  // This function is for save the status
  async saveStatus() {
    var k = 0;
    for (var i = 0; i < this.productList.value.length; i++) {
      var order = new OrderDetails();

      // Here all the conditions is for get details on the corresponding selected status

      if (this.visited) {
        this.raydService.visitingDetails.setServiceRequestId = this.service[0];
        this.raydService.visitingDetails.setVisitingMessage = this.statusForm.get('reviewMessage').value;

      }
      else if (this.reVisit) {
        this.raydService.visitingDetails.setServiceRequestId = this.service[0];
        this.raydService.visitingDetails.setVisitingMessage = this.statusForm.get('revisitingMessage').value;
      }
      else if (this.technician) {
        this.raydService.technician.setServiceRequestId = this.service[0];

        this.raydService.technician.setTechnicianId = this.statusForm.get('tech').value;
      }
      else if (this.completed) {
        order.setPartsName = this.productList.value[i].parts;
        order.setPrice = this.productList.value[i].price;
        order.setQuantity = this.productList.value[i].quantity;
        order.serviceRequestId = this.service[0];;
        order.setServiceCharge = this.statusForm.get('serviceCharge').value;
        this.raydService.orderDetails[k] = order;
      }
      k++;

    }

    // Here all the conditions is check which status is selected according to that call corresponding function

    if (this.visited)
      await this.raydService.saveStatus();
    else if (this.completed)
      await this.raydService.saveOrderDetails();
    else if (this.technician)
      await this.raydService.saveTechnician();
    else if (this.reVisit)
      await this.raydService.saveRevisit();
  }
  accepted(status) {
    if (status == 1)
      return true;

  }
  completed1(status) {
    if (status == 2)
      return true;
  }
  visited1(status) {
    if (status == 3)
      return true;
  }
  // This function is used to update the status
  async upadteStatus() {
    await this.raydService.getAcctedService();
    this.servicesRequest = this.raydService.servicesProblem;
  }

}
