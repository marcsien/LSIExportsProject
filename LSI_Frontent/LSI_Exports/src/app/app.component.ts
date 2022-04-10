import { Component } from '@angular/core';

interface Local {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'LSI_Exports';
  selectedLocal: string = 'Local1';

  locals: Local[] = [
    {value: 'Local1', viewValue: 'Local1'},
    {value: 'Local2', viewValue: 'Local2'},
    {value: 'Local3', viewValue: 'Local3'},
    {value: 'Local4', viewValue: 'Local4'},
    {value: 'Local5', viewValue: 'Local5'},
  ];
}
