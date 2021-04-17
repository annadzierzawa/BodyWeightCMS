import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { EatingDTO, EatingsService } from "src/app/services/eatings.service";

@Component({
  selector: 'app-eatings-chart',
  templateUrl: './eatings-chart.component.html',
  styleUrls: ['./eatings-chart.component.scss']
})
export class EatingsChartComponent implements OnInit {

  data: any;
  eatings: EatingDTO[];
  isInEditMode = false;

  constructor(private _eatingService: EatingsService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._eatingService.getWeightings().subscribe(res => {
      this.eatings = res;
      let labels = res.map(x => this.datepipe.transform(new Date(x.date), 'yyyy-MM-dd'));
      let dataset = res.map(x => x.caloriesSum)
      this.data = {
        labels: labels,
        datasets: [
          {
            label: 'Calories',
            data: dataset,
            fill: false,
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
          }
        ]
      }
    });
  }

  deleteClicked(id: number) {
    this._eatingService.deleteEating(id).subscribe(res => {
      this.isInEditMode = false;
      this.loadData();
    })
  }
}
