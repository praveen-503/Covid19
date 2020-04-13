import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MeterChartService {
latestCasesCount ;
hospitalLatestData;
inidaDailyWiseData;
indiaCumulativeWiseData;
  constructor(private http:HttpClient) {
    this.getIndiaDayWise();
    this.getLatestIndiaCases();
    this.getHospitalList();
  }
  getLatestIndiaCases(){
    this.http.get(environment.apiUrl+'/india-latest').subscribe(res=>{
     console.log(res);
     this.latestCasesCount = res;
    },
    err=>{
      console.log(err);
    });
  }
  getHospitalList(){
    this.http.get(environment.apiUrl+'/hospitalList').subscribe(res=>{
      console.log(res);
      this.hospitalLatestData= res;
     },
     err=>{
       console.log(err);
     });
  }

    getIndiaDayWise(){
     return this.http.get<any>(environment.apiUrl+'/india-actual-daywise');
  }

  getTopStates(){
    return this.http.get<any>(environment.apiUrl+'/india-statewise-data');

  }

  getIndiaPredectionData(){
    return this.http.get<any>(environment.apiUrl+'/india-predict-data');
  }
}
