import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { GetApiService } from './get-api.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


interface Local {
  value: string;
  viewValue: string;
}

export interface ExportElement {
  name: string;
  date: Date;
  time: Time;
  username: string;
  localname: string;
}

const ELEMENT_DATA: ExportElement[] = [
  //{ name: 'tst', date: new Date('2021-01-01'), time: {hours: 5, minutes: 10}, username: 'testuser', localname: 'testlocal'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'LSI_Exports';
  selectedLocal: string = 'Local1';
  displayedColumns: string[] = ['Nazwa', 'Data', 'Godzina', 'Użytkownik', 'Lokal'];
  selectedfromdate?: string = '';
  selectedtodate?: string = '';
  events: string[] = [];
  dataSource: ExportElement[] = ELEMENT_DATA;

  constructor(private api:GetApiService) 
  {

  } 

  ngOnInit() {
    this.refreshLocals();
    this.fillall();
  }

  refreshLocals() {
    this.api.getLocals().subscribe((data) => {     
      data.toString().split(',').forEach(element => {
        this.locals.push({value: element, viewValue: element})
      });
    })
  }

  locals: Local[] = [
    {value: 'Local1', viewValue: 'Local1'},
  ];

  public ok() {
    this.api.getExports(this.selectedLocal, this.selectedfromdate || '', this.selectedtodate || '').subscribe((data) => {     
      data.toString().split(',').forEach(element => {
        console.log(element)
      });
    })
  }

  public fillall() {
    this.api.getAllExports().subscribe((data) => {
      Object.entries(data).forEach(element => {console.log (element[1])})
    })
  }

  public todatechanged(event: MatDatepickerInputEvent<Date>) {
    this.selectedtodate = event.value?.toLocaleDateString()
  }

  public fromdatechanged(event: MatDatepickerInputEvent<Date>) {
    this.selectedfromdate = event.value?.toLocaleDateString()
  }

  
}
