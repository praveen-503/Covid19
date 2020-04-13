import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-india-svg',
  templateUrl: './india-svg.component.html',
  styleUrls: ['./india-svg.component.css']
})
export class IndiaSvgComponent implements OnInit {
change = null;
  constructor() { }

  ngOnInit(): void {
  }
  showChart(data){
    console.log(data);
  }
}
