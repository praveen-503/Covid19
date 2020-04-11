import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaPredictionComponent } from './india-prediction.component';

describe('IndiaPredictionComponent', () => {
  let component: IndiaPredictionComponent;
  let fixture: ComponentFixture<IndiaPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
