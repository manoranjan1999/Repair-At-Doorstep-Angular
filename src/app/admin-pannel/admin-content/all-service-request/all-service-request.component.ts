import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-all-service-request',
  templateUrl: './all-service-request.component.html',
  styleUrls: ['./all-service-request.component.css']
})
export class AllServiceRequestComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  public form: FormGroup;
  public productList: FormArray;

  ngOnInit() {
    this.form = this.fb.group({
      spName: [null, Validators.compose([Validators.required])],
      email: [null],
      phone: [null],
      productType: [null],
      products: this.fb.array([this.createProduct()]),
    });

    // set contactlist to the form control containing contacts
    this.productList = this.form.get('products') as FormArray;
  }

  createProduct(): FormGroup {
    return this.fb.group({
      productName: [null, Validators.compose([Validators.required])],
      productName1: [null, Validators.compose([Validators.required])],
      productName2: [null, Validators.compose([Validators.required])],
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
    return this.form.get('products') as FormArray;
  }

  // get the formgroup under contacts form array
  getProductsFormGroup(index): FormGroup {
    // this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.productList.controls[index] as FormGroup;
    return formGroup;
  }

  // method triggered when form is submitted
  submit() {
    console.log(this.form.value);
    for (var i = 0; i < this.productList.value.length; i++) {
      console.log(this.productList.value[i].productName);
    }

  }

}

