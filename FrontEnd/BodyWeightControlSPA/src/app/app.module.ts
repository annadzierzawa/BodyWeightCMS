import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/chart';
import { WeightingInsertComponent } from './components/weighting-insert/weighting-insert.component';
import { EatingInsertComponent } from './components/eating-insert/eating-insert.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { WeightingsService } from './services/weightings.service';
import { EatingsService } from './services/eatings.service';
import { HttpClientModule } from '@angular/common/http';
import { WeightingsChartComponent } from './components/weightings-chart/weightings-chart.component';
import { DatePipe } from '@angular/common';
import { EatingsChartComponent } from './components/eatings-chart/eatings-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightingInsertComponent,
    EatingInsertComponent,
    WeightingsChartComponent,
    EatingsChartComponent
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
    HttpClientModule
  ],
  providers: [WeightingsService,EatingsService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
