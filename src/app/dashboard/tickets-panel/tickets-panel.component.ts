import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-tickets-panel',
  templateUrl: './tickets-panel.component.html',
  styleUrls: ['./tickets-panel.component.css']
})
export class TicketsPanelComponent implements OnInit {
  faChevronCircleDown = faChevronCircleDown;
  constructor() {
 
   }

   chartOptions:any = {
    series: [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      height: 200,
      type: "bar"
    },
    title: {
    },
    xaxis: {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    },
    yaxis: {
     show:false
    }
  };


  ngOnInit(): void {
  }

}
