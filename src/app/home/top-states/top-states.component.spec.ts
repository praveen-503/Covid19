import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStatesComponent } from './top-states.component';

describe('TopStatesComponent', () => {
  let component: TopStatesComponent;
  let fixture: ComponentFixture<TopStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
