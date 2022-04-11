import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list'


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ]
})
export class AppModule { }
