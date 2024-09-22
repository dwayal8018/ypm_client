import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment = {
    paymentID: 1,
    amount: 299.99
  };

  constructor() { }

  ngOnInit(): void {
  }
}
