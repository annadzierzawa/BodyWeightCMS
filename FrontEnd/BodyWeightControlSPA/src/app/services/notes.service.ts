import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {


  constructor(private readonly http: HttpClient) { }

  addNote(model: AddNoteCommand): Observable<any> {
    return this.http.post<any>("https://localhost:5001/articles", model);
  }

  updateNote(note: NoteDTO) {
    return this.http.put<any>("https://localhost:5001/articles", note);
  }

  getNotes(): Observable<NoteDTO[]> {
    return this.http.get<NoteDTO[]>("https://localhost:5001/articles");
  }

  deleteNote(id: number) {
    return this.http.delete<void>(`https://localhost:5001/articles/${id}`);
  }
}

export interface AddNoteCommand {
  content: string;
}

export interface NoteDTO {
  id: number;
  articleContent: string;
}
