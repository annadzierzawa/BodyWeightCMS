import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightingsChartComponent } from './weightings-chart.component';

describe('WeightingsChartComponent', () => {
  let component: WeightingsChartComponent;
  let fixture: ComponentFixture<WeightingsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightingsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightingsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
