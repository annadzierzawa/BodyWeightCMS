import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { ChartModule } from "primeng/chart";
import { InputNumberModule } from "primeng/inputnumber";
import { RippleModule } from "primeng/ripple";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EatingInsertComponent } from "./components/eating-insert/eating-insert.component";
import { EatingsChartComponent } from "./components/eatings-chart/eatings-chart.component";
import { WeightingInsertComponent } from "./components/weighting-insert/weighting-insert.component";
import { WeightingsChartComponent } from "./components/weightings-chart/weightings-chart.component";
import { EatingsService } from "./services/eatings.service";
import { WeightingsService } from "./services/weightings.service";
import { NotesComponent } from './components/notes/notes.component';
import { NoteInsertComponent } from './components/notes/note-insert/note-insert.component';
import { NoteItemComponent } from './components/notes/note-item/note-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightingInsertComponent,
    EatingInsertComponent,
    WeightingsChartComponent,
    EatingsChartComponent,
    NotesComponent,
    NoteInsertComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ButtonModule,
    RippleModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [WeightingsService,EatingsService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
