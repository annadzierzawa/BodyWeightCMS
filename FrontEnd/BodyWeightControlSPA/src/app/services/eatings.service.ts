import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EatingsService {

  constructor(private readonly http: HttpClient) { }

  addEating(model: AddEatingCommand): Observable<any> {
    return this.http.post<any>("https://localhost:5001/eating", model);
  }

  deleteEating(id: number): Observable<void> {
    return this.http.delete<any>("https://localhost:5001/eating/" + id);
  }

  getWeightings(): Observable<EatingDTO[]> {
    return this.http.get<EatingDTO[]>("https://localhost:5001/eating");
  }
}

export interface AddEatingCommand {
  date: Date;
  caloriesSum: number;
}

export interface EatingDTO {
  id: number;
  date: Date;
  caloriesSum: number;
}
