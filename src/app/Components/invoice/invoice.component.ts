import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoice = {
    invoiceID: 1,
    totalPrice: 399.99
  };

  constructor() { }

  ngOnInit(): void {
  }
}
