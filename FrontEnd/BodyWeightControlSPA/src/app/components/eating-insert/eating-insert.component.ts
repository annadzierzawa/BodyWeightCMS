import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EatingsService } from 'src/app/services/eatings.service';

@Component({
  selector: 'app-eating-insert',
  templateUrl: './eating-insert.component.html',
  styleUrls: ['./eating-insert.component.scss']
})
export class EatingInsertComponent implements OnInit {
  @Output() eatingAdded = new EventEmitter<any>();

  calories:number;
  date: Date;
  constructor(private _eatingService:EatingsService) { }

  ngOnInit(): void {
  }

  buttonDisabled()
  {
    if(this.calories!=null && this.date!=null)
    {
      false;
    }else{
      return true;
    }
  }

  onButtonClicked(){
    if(this.calories!=null && this.date!=null)
    {
      this._eatingService.addEating({date:this.date,caloriesSum:this.calories}).subscribe(resp=>{
        this.eatingAdded.emit();
      });
    }
  }

}
