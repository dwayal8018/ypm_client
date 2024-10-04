import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'http://localhost:8080/invoices'; // Replace with actual API URL

  constructor(private http: HttpClient) { }

  getInvoiceById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  payInvoice(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/pay`, {});
  }

  downloadInvoicePDF(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}/pdf`, { responseType: 'blob' });
  }

  emailInvoice(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/email`, {});
  }
}
