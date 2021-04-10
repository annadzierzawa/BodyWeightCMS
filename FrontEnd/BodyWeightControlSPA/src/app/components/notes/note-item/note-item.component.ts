import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NoteDTO, NotesService } from "src/app/services/notes.service";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  @Input() note: NoteDTO;

  @Output() articleDeleted = new EventEmitter<void>();

  constructor(private _notesService: NotesService) { }

  ngOnInit(): void {
  }

  deleteClicked() {
    this._notesService.deleteNote(this.note.id).subscribe(_=>{
      this.articleDeleted.emit();
    })
  }

}
