import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HomeComponent } from './home/home.component';
import { IndiaSvgComponent } from './home/india-svg/india-svg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeterComponent } from './home/meter/meter.component';

import { HospitalsComponent } from './home/hospitals/hospitals.component';
import { TopStatesComponent } from './home/top-states/top-states.component';
import { SideChartsComponent } from './home/side-charts/side-charts.component';
import { IndiaPredictionComponent } from './home/india-prediction/india-prediction.component';
import { DailyComponent } from './home/side-charts/daily/daily.component';
import { HospitalChartComponent } from './home/hospital-chart/hospital-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndiaSvgComponent,
    NavbarComponent,
    MeterComponent,
    HospitalsComponent,
    TopStatesComponent,
    SideChartsComponent,
    IndiaPredictionComponent,
    DailyComponent,
    HospitalChartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
