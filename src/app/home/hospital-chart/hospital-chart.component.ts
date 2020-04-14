import { Component, OnInit } from '@angular/core';
import { MeterChartService } from 'src/app/shared/meter-chart.service';

@Component({
  selector: 'app-hospital-chart',
  templateUrl: './hospital-chart.component.html',
  styleUrls: ['./hospital-chart.component.css']
})
export class HospitalChartComponent implements OnInit {
  hospitalSeries :any;
  commonSeriesData:any;
  series1Data:any;
  series2Data:any;
  series3Data:any;
  series4Data:any;
  single: any[];
  public view: any[] = [1000, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel: "Years";
  public showYAxisLabel = true;
  public yAxisLabel: "Salary";
  public graphDataChart: any[];
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
   constructor(private meterService:MeterChartService) {
    // Object.assign(this, { single })
    this.view = [innerWidth / 1.3, 400];
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }
  ngOnInit(): void {
    this.meterService.getIndiaPredectionData().subscribe(res=>{
      console.log("India Predection data",res)
      this.series1Data =res.series1;
      this.series2Data =res.series2;
      this.series3Data =res.series3;
      this.series4Data =res.series4;
      this.commonSeriesData = this.series1Data;
      this.hospitalSeries = res.hospitalSeries;
      console.log(this.hospitalSeries);
    })
  }
  onChangeCommonData(data){
    if(data == 's1'){
      this.commonSeriesData = this.series1Data;
    }
    else if(data == 's2'){
      this.commonSeriesData = this.series2Data;
    }
    else if(data == 's3'){
      this.commonSeriesData = this.series3Data;
    }
    else {
      this.commonSeriesData = this.series4Data;
    }
  }


}








