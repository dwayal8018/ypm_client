import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomPCBuild } from '../Models/custom-pc-build.model';

@Injectable({
  providedIn: 'root'
})
export class CustomPCBuildService {
  private baseUrl = 'http://localhost:8080/api/custom-pc-builds'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  getBuilds(): Observable<CustomPCBuild[]> {
    return this.http.get<CustomPCBuild[]>(`${this.baseUrl}`);
  }

  getBuild(id: number): Observable<CustomPCBuild> {
    return this.http.get<CustomPCBuild>(`${this.baseUrl}/${id}`);
  }

  createBuild(build: CustomPCBuild): Observable<CustomPCBuild> {
    return this.http.post<CustomPCBuild>(`${this.baseUrl}`, build);
  }

  updateBuild(id: number, build: CustomPCBuild): Observable<CustomPCBuild> {
    return this.http.put<CustomPCBuild>(`${this.baseUrl}/${id}`, build);
  }

  deleteBuild(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
