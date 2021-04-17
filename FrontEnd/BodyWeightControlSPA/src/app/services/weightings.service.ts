import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeightingsService {

  constructor(private readonly http: HttpClient) { }

  addWeighting(model: AddWeightingCommand): Observable<any> {
    return this.http.post<any>("https://localhost:5001/weightings", model);
  }

  deleteWeighting(id: number): Observable<void> {
    return this.http.delete<any>("https://localhost:5001/weightings/" + id);
  }

  getWeightings(): Observable<WeightingDTO[]> {
    return this.http.get<WeightingDTO[]>("https://localhost:5001/weightings");
  }
}

export interface AddWeightingCommand {
  date: Date;
  weight: number;
}

export interface WeightingDTO {
  id: number;
  date: Date;
  weight: number;
}
