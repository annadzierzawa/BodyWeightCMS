import { Component, OnInit } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { switchMapTo } from "rxjs/operators";
import { NoteDTO, NotesService } from "src/app/services/notes.service";


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes$: Observable<NoteDTO[]>
  notesChangedSubject$ = new ReplaySubject();

  constructor(private _notesService: NotesService) { }

  ngOnInit(): void {
    this.notes$ = this.notesChangedSubject$.pipe(
      switchMapTo(this._notesService.getNotes()
      ));
    this.notesChangedSubject$.next();
  }

  onNotesChanged() {
    this.notesChangedSubject$.next();
  }

}
