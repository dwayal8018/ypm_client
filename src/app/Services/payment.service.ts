import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../Models/orders.model';
import { Payment } from '../Models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl =  'http://localhost:8080/api/payments';   // Replace with actual API URL

  constructor(private http: HttpClient) { }

  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.apiUrl);
  }

  getPaymentById(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${id}`);
  }

  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }

  updatePayment(payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${this.apiUrl}/${payment.id}`, payment);
  }

  deletePayment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>('http://localhost:3000/orders');  // Replace with actual API URL
  }
}
