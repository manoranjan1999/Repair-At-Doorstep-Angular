import { Component, OnInit } from '@angular/core';
import { Technician } from '../../technician/technician';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceproviderService } from 'src/app/serviceprovider/serviceprovider.service';
import { RaydService } from 'src/app/rayd.service';

@Component({
  selector: 'app-sp-add-technician',
  templateUrl: './sp-add-technician.component.html',
  styleUrls: ['./sp-add-technician.component.css']
})
export class SpAddTechnicianComponent implements OnInit {
  message: any;
  spId: number = this.raydService.serviceData.serviceProviderId;

  private technicianObj: Technician = new Technician(this.spId);

  technicianForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    qualification: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone_Number: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private raydService: RaydService, private spService: ServiceproviderService) { }

  ngOnInit() {
  }

  // This function used for save technician details
  public sendTechieData() {
    let resp1 = this.spService.saveTechieData(this.technicianObj);
    resp1.subscribe((data) => {
      this.message = data;
    });
  }

}
