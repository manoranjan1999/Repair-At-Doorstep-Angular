import { Component, OnInit, ElementRef } from '@angular/core';
import { ServiceproviderService } from '../../serviceprovider.service';
import { SpQuery } from "./sp-query";
import { NgxSpinnerService } from 'ngx-spinner';
import { RaydService } from 'src/app/rayd.service';

@Component({
  selector: 'app-sp-query',
  templateUrl: './sp-query.component.html',
  styleUrls: ['./sp-query.component.css']
})
export class SpQueryComponent implements OnInit {

  spId: number = this.raydService.serviceData.serviceProviderId;
  spObj: any;
  spObjArr: any = [];
  constructor(private raydService: RaydService, private spService: ServiceproviderService, private SpinnerService: NgxSpinnerService) { }

  ngOnInit() {
  }

  // This function is for send query to admin
  public saveQuery(queryTitle, query) {
    this.SpinnerService.show();
    let date: Date = new Date();
    let resp1 = this.spService.getSpDetails(this.spId);
    resp1.subscribe((data) => {
      this.spObj = data;
      var str = this.spObj + '';
      this.spObjArr = str.split(",");
      let isSolved: boolean = false;
      let spQueryObj: SpQuery = new SpQuery(this.spId, this.spObjArr[0], this.spObjArr[1], queryTitle, query, date, isSolved);
      this.SpinnerService.hide();
      this.spService.saveQuery(spQueryObj);

    });
  }

}
