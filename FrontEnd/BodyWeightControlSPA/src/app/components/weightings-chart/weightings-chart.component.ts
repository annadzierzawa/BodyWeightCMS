import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { WeightingDTO, WeightingsService } from "src/app/services/weightings.service";

@Component({
  selector: 'app-weightings-chart',
  templateUrl: './weightings-chart.component.html',
  styleUrls: ['./weightings-chart.component.scss']
})
export class WeightingsChartComponent implements OnInit {
  data: any;
  weightings: WeightingDTO[];
  isInEditMode = false;

  constructor(private _weightingService: WeightingsService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._weightingService.getWeightings().subscribe(res => {
      this.weightings = res;
      let labels = res.map(x => this.datepipe.transform(new Date(x.date), 'yyyy-MM-dd'));
      let dataset = res.map(x => x.weight)
      this.data = {
        labels: labels,
        datasets: [
          {
            label: 'Weights',
            data: dataset,
            fill: false,
            borderColor: '#4bc0c0'
          }
        ]
      }
    });
  }

  deleteClicked(id: number) {
    this._weightingService.deleteWeighting(id).subscribe(res => {
      this.isInEditMode = false;
      this.loadData();
    })
  }

}
