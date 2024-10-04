import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceRequestService {
 

  apiUrl = "http://localhost:8080/api/service-requests";

  constructor(private http: HttpClient) { }
  
  getAllServiceRequests(userRole:any,userID:any) {
    return this.http.get<any>(this.apiUrl+"?userRole="+userRole+"&userID="+userID);
  }

  createServiceRequest(serviceRequestBody:any){
    return this.http.post<any>(this.apiUrl+"/create-service",serviceRequestBody);
  }

  deleteServiceRequest(id: number) {
    return this.http.delete<any>(this.apiUrl+"/"+id);
  }
}
