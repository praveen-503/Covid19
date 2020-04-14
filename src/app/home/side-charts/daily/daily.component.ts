import { Component, OnInit } from '@angular/core';
import { MeterChartService } from 'src/app/shared/meter-chart.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  dailyWiseData: any;
  cumulativeData: any;
  confirmedCases:any;
  commonData;
  constructor(public meterService: MeterChartService) {
  }
  ngOnInit() {
    this.meterService.getIndiaDayWise().subscribe(res => {
      console.log(res);
      this.dailyWiseData = res.daily;
      this.cumulativeData = res.cumulative;
      this.commonData = this.dailyWiseData;
    },
      err => {
        console.log(err);
      });
  }
  changeData(name) {
    if (name == 'daily') {
      this.commonData = this.dailyWiseData;
    }
    else{
      this.commonData = this.cumulativeData;
    }

  }
  onSelect(data) {
    console.log(data);
  }
  view: any[] = [450, 150];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
  showYAxisLabel = true;
  showGridLines =  false;
  yAxisLabel = 'Confirmed Cases';
  timeline = true;

  colorScheme = [
  {domain: ['#ff929d', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']},
  {domain: ['#93f3a9', '#9370DB', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']},
  {domain: ['#ffe493', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']},
];

  //pie
  showLabels = true;

  // data goes here
  public single = [
    {
      "name": "China",
      "value": 2243772
    },
    {
      "name": "USA",
      "value": 1126000
    },
    {
      "name": "Norway",
      "value": 296215
    },
    {
      "name": "Japan",
      "value": 257363
    },
    {
      "name": "Germany",
      "value": 196750
    },
    {
      "name": "France",
      "value": 204617
    }
  ];

  public multi = [
    [
      {
        "name": "China",
        "series": [
          {
            "name": "2018",
            "value": 2243772
          },
          {
            "name": "2017",
            "value": 1227770
          },
        ]
      }],
    [
      {
        "name": "USA",
        "series": [
          {
            "name": "2018",
            "value": 1126000
          },
          {
            "name": "2017",
            "value": 764666
          }
        ]
      }],

    [{
      "name": "Norway",
      "series": [
        {
          "name": "2018",
          "value": 296215
        },
        {
          "name": "2017",
          "value": 209122
        }
      ]
    }],


  ];

}
