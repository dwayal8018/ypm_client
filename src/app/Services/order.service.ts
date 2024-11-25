import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  apiUrl = "http://localhost:8080/api/orders";
  constructor(private http: HttpClient) { }



  // Get all orders
  getAllOrders(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Get order by ID
  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new order
  createOrder(orderBody: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orderBody);
  }

  // Delete an order by ID
  deleteOrder(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
