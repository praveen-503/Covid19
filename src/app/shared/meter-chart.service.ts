import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MeterChartService {
latestCasesCount ;
  constructor(private http:HttpClient) {this.getLatestIndiaCases() }
  getLatestIndiaCases(){
    this.http.get(environment.apiUrl+'/india-latest').subscribe(res=>{
     console.log(res);
     this.latestCasesCount = res;
    },
    err=>{
      console.log(err);
    });
  }
}
