import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { NotesService } from "../../../services/notes.service";

@Component({
  selector: 'app-note-insert',
  templateUrl: './note-insert.component.html',
  styleUrls: ['./note-insert.component.scss']
})
export class NoteInsertComponent implements OnInit {

  @Output() noteAdded = new EventEmitter<void>()

  editorData = new FormControl("",[Validators.minLength(15),Validators.required])

  constructor(private _notesService: NotesService) { }

  ngOnInit(): void {
  }

  clearClicked() {
    this.clearEditorData();
  }

  submitClicked() {
    this._notesService.addNote({ content: this.editorData.value }).subscribe(_ => {
      this.clearEditorData();
      this.noteAdded.emit();
    })
  }

  clearEditorData() {
    this.editorData.reset()
  }

  editorConfig: AngularEditorConfig = {
editable:true,
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
