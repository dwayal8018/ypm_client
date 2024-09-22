import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  private baseUrl = 'http://localhost:8080/api'; 
  constructor(private http: HttpClient) { }

  // getPCComponents() {
  //   return this.http.get('/pccomponents'); // Replace with your actual API endpoint
  // }

  // getServiceRequests() {
  //   return this.http.get('/servicerequests'); // Replace with your actual API endpoint
  // }
}
