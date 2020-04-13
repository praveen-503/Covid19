import { Component, OnInit } from '@angular/core';
import { MeterChartService } from 'src/app/shared/meter-chart.service';

@Component({
  selector: 'app-india-prediction',
  templateUrl: './india-prediction.component.html',
  styleUrls: ['./india-prediction.component.css']
})
export class IndiaPredictionComponent implements OnInit {
  commonSeriesData:any;
  series1Data:any;
  series2Data:any;
  series3Data:any;
  series4Data:any;
  public view: any[] = [1000, 400];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showGridLines = false
  public showXAxisLabel = true;
  public xAxisLabel: "Years";
  public showYAxisLabel = true;
  public yAxisLabel: "Salary";
  public trimXAxisTicks = true;
  public maxXAxisTickLength =3;
  public graphDataChart: any[];
  public colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
   constructor(private meterService:MeterChartService) {
    // Object.assign(this, { single })
    
  }
  ngOnInit(): void {
    this.meterService.getIndiaPredectionData().subscribe(res=>{
      console.log("India Predection data",res)
      this.series1Data =res.series1;
      this.series2Data =res.series2;
      this.series3Data =res.series3;
      this.series4Data =res.series4;
      this.commonSeriesData = this.series1Data;
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
