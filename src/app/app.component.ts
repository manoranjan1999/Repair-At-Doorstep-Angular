import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repair-at-your-doorstep';

  constructor(private router:Router){
  }
  
  flag=true;
  change(url){
    if(url=="/")
    this.flag=true;
    else
    this.flag=false;
  }
}
