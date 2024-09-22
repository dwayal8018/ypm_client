import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  api = "http://localhost:8080/api/pc-components";

  constructor(private http: HttpClient) { }


  getComponents() {
    return this.http.get<any>(this.api);
  }



}
