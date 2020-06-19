import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-admin-pannel',
  templateUrl: './admin-pannel.component.html',
  styleUrls: ['./admin-pannel.component.css']
})
export class AdminPannelComponent implements OnInit {

  constructor(private router:Router,private appComponent:AppComponent) {
    console.log(this.router.url)
    if(this.router.url){
    this.appComponent.change(this.router.url);
    }
   }

  ngOnInit() {
  }

}
