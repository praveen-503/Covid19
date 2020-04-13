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
  public view: any[] = [700, 400];
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
    this.single = [
      {
        "name": "H1",
        "series": [
 {name: "24/Mar/2020", value: 171.3},
 {name: "25/Mar/2020", value: 359.73},
 {name: "26/Mar/2020", value: 567.003},
 {name: "27/Mar/2020", value: 795.0033000000001},
 {name: "28/Mar/2020", value: 1045.80363},
 {name: "29/Mar/2020", value: 1321.683993},
 {name: "30/Mar/2020", value: 1625.1523923000002},
 {name: "31/Mar/2020", value: 1958.9676315300003},
 {name: "01/Apr/2020", value: 2326.1643946830004},
 {name: "02/Apr/2020", value: 2730.0808341513007},
 {name: "03/Apr/2020", value: 3174.388917566431},
 {name: "04/Apr/2020", value: 3663.127809323074},
 {name: "05/Apr/2020", value: 4200.740590255382},
 {name: "06/Apr/2020", value: 4792.11464928092},
 {name: "07/Apr/2020", value: 5442.6261142090125},
 {name: "08/Apr/2020", value: 6158.188725629914},
 {name: "09/Apr/2020", value: 6945.307598192906},
 {name: "10/Apr/2020", value: 7811.1383580121965},
 {name: "11/Apr/2020", value: 8763.552193813417},
 {name: "12/Apr/2020", value: 9811.20741319476},
 {name: "13/Apr/2020", value: 10963.628154514236},
 {name: "14/Apr/2020", value: 12231.29096996566},
 {name: "15/Apr/2020", value: 13625.720066962225},
 {name: "16/Apr/2020", value: 15159.592073658448},
 {name: "17/Apr/2020", value: 16827.25414108558},
 {name: "18/Apr/2020", value: 18661.68241525543},
 {name: "19/Apr/2020", value: 20679.55351684226},
 {name: "20/Apr/2020", value: 22899.211728587772},
 {name: "21/Apr/2020", value: 25340.83576150784},
 {name: "22/Apr/2020", value: 28026.622197719913},
 {name: "23/Apr/2020", value: 30980.98727755319},
 {name: "24/Apr/2020", value: 34230.78886536981},
 {name: "25/Apr/2020", value: 37805.570611968076},
 {name: "26/Apr/2020", value: 41737.830533226166},
 {name: "27/Apr/2020", value: 46063.31644661007},
 {name: "28/Apr/2020", value: 50821.350951332366},
 {name: "29/Apr/2020", value: 56055.18890652689},
 {name: "30/Apr/2020", value: 61812.41065724088},
 {name: "01/May/2020", value: 68145.35458302624},
 {name: "02/May/2020", value: 75111.59290139015},
 {name: "03/May/2020", value: 82774.45505159046},
 {name: "04/May/2020", value: 91203.60341681079}

        ],
      },
      {
        "name": "H2",
        "series": [
 {name: "24/Mar/2020", value: 171.3},
{name: "25/Mar/2020", value: 359.73}
,{name: "26/Mar/2020", value: 567.003},
{name: "27/Mar/2020", value: 795.0033000000001},
{name: "28/Mar/2020", value: 1045.80363},
{name: "29/Mar/2020", value: 1321.683993},
{name: "30/Mar/2020", value: 1625.1523923000002},
{name: "31/Mar/2020", value: 1958.9676315300003},
{name: "01/Apr/2020", value: 2326.1643946830004},
{name: "02/Apr/2020", value: 2730.0808341513007},
{name: "03/Apr/2020", value: 3174.388917566431},
{name: "04/Apr/2020", value: 3663.127809323074},
{name: "05/Apr/2020", value: 4200.740590255382},
{name: "06/Apr/2020", value: 4792.11464928092},
{name: "07/Apr/2020", value: 5442.6261142090125},
{name: "08/Apr/2020", value: 6158.188725629914},
{name: "09/Apr/2020", value: 6945.307598192906},
{name: "10/Apr/2020", value: 7811.1383580121965},
{name: "11/Apr/2020", value: 8763.552193813417},
{name: "12/Apr/2020", value: 9811.20741319476},
{name: "13/Apr/2020", value: 10963.628154514236},
{name: "14/Apr/2020", value: 12231.29096996566},
{name: "15/Apr/2020", value: 13625.720066962225},
{name: "16/Apr/2020", value: 15159.592073658448},
{name: "17/Apr/2020", value: 16827.25414108558},
{name: "18/Apr/2020", value: 18661.68241525543},
{name: "19/Apr/2020", value: 20516.226825569247},
{name: "20/Apr/2020", value: 22390.939065346152},
{name: "21/Apr/2020", value: 24285.852478193643},
{name: "22/Apr/2020", value: 26200.979940807887},
{name: "23/Apr/2020", value: 28136.311530667343},
{name: "24/Apr/2020", value: 30091.81195706834},
{name: "25/Apr/2020", value: 32067.417731795704},
{name: "26/Apr/2020", value: 34063.0340533503},
{name: "27/Apr/2020", value: 36078.5313760471},
{name: "28/Apr/2020", value: 38113.74163242817},
{name: "29/Apr/2020", value: 40168.454074278925},
{name: "30/Apr/2020", value: 42242.4106940643},
{name: "01/May/2020", value: 44335.301184782744},
{name: "02/May/2020", value: 46446.75739203503},
{name: "03/May/2020", value: 48576.34720748409},
{name: "04/May/2020", value: 50723.56784779925},
{name: "05/May/2020", value: 52887.83845758697},
{name: "06/May/2020", value: 55068.49196865981},
{name: "07/May/2020", value: 57264.76614122996},


        ],
      },
   
    ]
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








 