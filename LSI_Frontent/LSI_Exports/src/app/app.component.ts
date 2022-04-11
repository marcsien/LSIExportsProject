import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { GetApiService } from './get-api.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableComponent } from './data-table/data-table.component';



interface Local {
  value: string;
  viewValue: string;
}

interface ExportElement {
  name: string;
  date: Date;
  time: Time;
  username: string;
  localname: string;
}

const ELEMENT_DATA: ExportElement[] = [
  { name: 'tst', date: new Date('2021-01-01'), time: {hours: 5, minutes: 10}, username: 'testuser', localname: 'testlocal'},
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
  locals: Local[] = [];
  //dataSource: ExportElement[] = [];
  dataSource1!: MatTableDataSource<ExportElement[]>;
  appdatatable: DataTableComponent = new DataTableComponent();

  constructor(private api:GetApiService) 
  {
      
  } 

  ngOnInit() {
    this.refreshLocals();
    this.fillall();
    //this.appdatatable.ngAfterViewInit()
  }

  refreshLocals() {
    this.api.getLocals().subscribe((data) => {     
      data.toString().split(',').forEach(element => {
        this.locals.push({value: element, viewValue: element})
      });
    })
  }

 

  public ok() {
    this.api.getExports(this.selectedLocal, this.selectedfromdate || '', this.selectedtodate || '').subscribe((data) => {     
      data.toString().split(',').forEach(element => {
        console.log(element)
      });
    })
  }

  public fillall() {
    this.api.getAllExports().subscribe((data) => {
      Object.entries(data).forEach(element => {
        this.appdatatable.dataSource.data.push({ name: element[1].name, date: new Date(element[1].date), time: {hours: 0, minutes: 0}, username: element[1].username, localname: element[1].localname})
      })
    })


  }

  public todatechanged(event: MatDatepickerInputEvent<Date>) {
    this.selectedtodate = event.value?.toLocaleDateString()
  }

  public fromdatechanged(event: MatDatepickerInputEvent<Date>) {
    this.selectedfromdate = event.value?.toLocaleDateString()
  }

  
}
