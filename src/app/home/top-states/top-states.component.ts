import { Component, OnInit } from '@angular/core';
import { MeterChartService } from 'src/app/shared/meter-chart.service';

@Component({
  selector: 'app-top-states',
  templateUrl: './top-states.component.html',
  styleUrls: ['./top-states.component.css']
})
export class TopStatesComponent implements OnInit {
  topStates:[];
  constructor(public meterService:MeterChartService) { }

  ngOnInit() {
    this.meterService.getTopStates().subscribe(res=>{
      console.log('Top States',res);
      this.topStates = res;
    },
    err=>{
      console.log(err);
    })
  }

}
