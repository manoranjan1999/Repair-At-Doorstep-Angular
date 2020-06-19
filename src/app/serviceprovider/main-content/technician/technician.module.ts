import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicianComponent } from './technician.component';
import { SpAddTechnicianComponent } from './sp-add-technician/sp-add-technician.component';
import { SpTechniciansComponent } from './sp-technicians/sp-technicians.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TechnicianComponent,
    SpTechniciansComponent,
    SpAddTechnicianComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TechnicianModule { }
