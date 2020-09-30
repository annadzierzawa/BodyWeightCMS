import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {WeightingsService,AddWeightingCommand} from '../../services/weightings.service'

@Component({
  selector: 'app-weighting-insert',
  templateUrl: './weighting-insert.component.html',
  styleUrls: ['./weighting-insert.component.scss']
})
export class WeightingInsertComponent implements OnInit {

  @Output() weightingAdded = new EventEmitter<any>();

  weight:number;
  date: Date;

  constructor(private _weightingService:WeightingsService) { }

  ngOnInit(): void {

  }

  buttonDisabled()
  {
    if(this.weight!=null && this.date!=null)
    {
      false;
    }else{
      return true;
    }
  }

  onButtonClicked(){
    if(this.weight!=null && this.date!=null)
    {
      this._weightingService.addWeighting({date:this.date,weight:this.weight}).subscribe(resp=>{
        this.weightingAdded.emit();
      });
    }
  }

}
