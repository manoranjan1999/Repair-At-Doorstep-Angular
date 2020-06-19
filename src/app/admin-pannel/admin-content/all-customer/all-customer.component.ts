import { Component, OnInit } from '@angular/core';
import { RaydService } from 'src/app/rayd.service';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent implements OnInit {

  constructor(private raydService: RaydService) {

  }
  address;
  view = false;
  customer;

  async ngOnInit() {
    // Fetch details of all user
    await this.raydService.getAllCustomer();
    this.customer = this.raydService.allCustomer;
  }

  // This function is for show the address of a particular user
  details(event) {
    this.address = event;
    this.view = true;
  }
}
