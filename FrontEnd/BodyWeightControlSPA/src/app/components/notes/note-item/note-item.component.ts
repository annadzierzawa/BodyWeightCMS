import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { NoteDTO, NotesService } from "src/app/services/notes.service";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  noteId: number;
  editorData = new FormControl("", [Validators.minLength(15), Validators.required])
  oldArticleContent: any;

  @Input() set note(value: NoteDTO) {
    this.noteId = value.id
    this.editorData.setValue(value.articleContent);
  }

  @Output() articleDeleted = new EventEmitter<void>();

  isInEditMode = false;

  constructor(private _notesService: NotesService) { }

  ngOnInit(): void {
  }

  deleteClicked() {
    this._notesService.deleteNote(this.noteId).subscribe(_ => {
      this.articleDeleted.emit();
    })
  }

  editClicked() {
    this.oldArticleContent = this.editorData.value;
    this.isInEditMode = true;
  }

  cancelEditingClicked() {
    this.editorData.setValue(this.oldArticleContent);
    this.isInEditMode = false;
  }

  saveClicked() {
    this._notesService.updateNote({ id: this.noteId, articleContent: this.editorData.value }).subscribe(res => {
      this.articleDeleted.emit();
    })
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    toolbarHiddenButtons: [
      [

        'outdent',
      ],
      [
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  }
}
