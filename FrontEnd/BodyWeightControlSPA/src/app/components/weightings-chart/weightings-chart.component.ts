import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { WeightingsService } from 'src/app/services/weightings.service';

@Component({
  selector: 'app-weightings-chart',
  templateUrl: './weightings-chart.component.html',
  styleUrls: ['./weightings-chart.component.scss']
})
export class WeightingsChartComponent implements OnInit {
  data: any;
  
  constructor(private _weightingService:WeightingsService,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this._weightingService.getWeightings().subscribe(res=>{
      console.log(res)
      let labels = res.map(x=>this.datepipe.transform(new Date(x.date),'yyyy-MM-dd'));
      let dataset = res.map(x=>x.weight)
      this.data = {
        labels:labels,
        datasets:[
          {
            label: 'Weights',
            data:dataset,
            fill: false,
            borderColor: '#4bc0c0'
          }
        ]
      }
    });
  }

}
