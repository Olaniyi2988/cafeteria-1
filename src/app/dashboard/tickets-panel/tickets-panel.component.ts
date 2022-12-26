import { Component, OnInit } from '@angular/core';
import { faChevronCircleDown,faCheckCircle,faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
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
  faCheckCircle = faCheckCircle;
  faExclamationTriangle = faExclamationTriangle;
  constructor() {
 
   }

   chartOptions:any = {
    grid: {
      show: false,
      borderColor: ''
    },
    series: [
      {
        name: "Tickets",
        data: [10, 41, 35, 101, 49, 62, 69, 91, 35],
        color: '#FECA14',
        dataLabels: {
          enabled: false
        }
      }
     
    ],
    chart: {
      height: 150,
      type: "bar"
    },
    title: {
    },
    xaxis: {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    },
    yaxis: {
     show:false,
     labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
    },
    // plotOptions: {
    //   dataLabels: {
    //     enabled:false
    //   },
    //   bar: {
    //     borderRadius: 3,
    //     borderRadiusApplication: 'end',
    //     columnWidth:"25%"
    //   },
     
    // }

    plotOptions: {
      bar: {
          horizontal: false,
          borderRadius: 5,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last',
          columnWidth: '30%',
          barHeight: '70%',
          distributed: false,
          rangeBarOverlap: true,
          rangeBarGroupRows: false,
          dataLabels: {
              enabled:false,
              position:"vertical"
          }
      }
  }
  };


  ngOnInit(): void {
  }

}
