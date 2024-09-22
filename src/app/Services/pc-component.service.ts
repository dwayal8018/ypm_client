import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PCComponent } from '../Models/pc-component.model';

@Injectable({
  providedIn: 'root'
})
export class PCComponentService {
  private baseUrl = 'http://localhost:8080/api/pc-components'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  getComponents(): Observable<PCComponent[]> {
    return this.http.get<PCComponent[]>(`${this.baseUrl}`);
  }

  getComponent(id: number): Observable<PCComponent> {
    return this.http.get<PCComponent>(`${this.baseUrl}/${id}`);
  }

  createComponent(component: PCComponent): Observable<PCComponent> {
    return this.http.post<PCComponent>(`${this.baseUrl}`, component);
  }

  updateComponent(id: number, component: PCComponent): Observable<PCComponent> {
    return this.http.put<PCComponent>(`${this.baseUrl}/${id}`, component);
  }

  deleteComponent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
