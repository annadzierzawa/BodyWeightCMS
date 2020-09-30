import { Component, ViewChild } from '@angular/core';
import { EatingsChartComponent } from './components/eatings-chart/eatings-chart.component';
import { WeightingsChartComponent } from './components/weightings-chart/weightings-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any;
  @ViewChild(WeightingsChartComponent) wChart:WeightingsChartComponent;
  @ViewChild(EatingsChartComponent) eChart:EatingsChartComponent;

  onWeightingAdded(){
    this.wChart.loadData();
  }

  onEatingAdded(){
    this.eChart.loadData();
  }
  constructor() {
  }
}
