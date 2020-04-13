import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalChartComponent } from './hospital-chart.component';

describe('HospitalChartComponent', () => {
  let component: HospitalChartComponent;
  let fixture: ComponentFixture<HospitalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
