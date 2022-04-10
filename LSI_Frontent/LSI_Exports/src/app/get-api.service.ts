import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  getLocals()
  {
    return this.http.get('https://localhost:44336/exports/selectablelocals')
  }

  getAllExports()
  {
    return this.http.get('https://localhost:44336/exports/all')
  }

  getExports(local:string, from: string, to:string)
  {
    return this.http.get('https://localhost:44336/exports/')
  }

}
