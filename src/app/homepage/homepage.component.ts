import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";
import { RaydService } from '../rayd.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private SpinnerService: NgxSpinnerService, private raydService: RaydService) { }
  PieChart = [];
  BarChart = [];

  async ngOnInit() {
    this.SpinnerService.show();

    // This function geting all request type
    await this.raydService.getrequestType();
    this.SpinnerService.hide();

    // This function for draw pie chart and bar chart using chart.js of all request  
    this.PieChart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ["Electronics", "Furniture", "Plumber", "Mechanic"],
        datasets: [{
          label: 'Pie Chart',
          data: this.raydService.requestType[0],
          backgroundColor: [
            'YELLOW',
            'BLUE',
            'GREEN',
            'PINK'
          ],
        }]
      },
      options: {
        title: {
          text: "Pie Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    })

    this.BarChart = new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ["Electronics", "Furniture", "Plumber", "Mechanic"],
        datasets: [{
          label: 'Bar Chart',
          data: this.raydService.requestType[0],
          backgroundColor: [
            'YELLOW',
            'BLUE',
            'GREEN',
            'PINK'
          ],
        }]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    })

  }

}
