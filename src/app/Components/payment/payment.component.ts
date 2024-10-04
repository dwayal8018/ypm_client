import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/Models/orders.model';
import { Payment } from 'src/app/Models/payment.model';


// Enum for Payment Method
export enum PaymentMethod {
  CreditCard = 'CreditCard',
  DebitCard = 'DebitCard',
  PayPal = 'PayPal',
  BankTransfer = 'BankTransfer',
}

// Enum for Payment Status
export enum PaymentStatus {
  Pending = 'Pending',
  Completed = 'Completed',
  Failed = 'Failed',
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})


export class PaymentComponent implements OnInit {
  id: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentDate: Date;
  order: Orders;
  payment: Payment;
  paymentMethods: PaymentMethod[];
  paymentStatuses: PaymentStatus[];
  paymentForm: boolean = true;

  // payment = {
  //   paymentID: 1,
  //   amount: 299.99
  // };



  constructor() {
    this.id = 0;
    this.paymentMethod = PaymentMethod.CreditCard; // Default method
    this.paymentStatus = PaymentStatus.Pending;    // Default status
    this.paymentDate = new Date();                 // Current date
    this.order = new Orders();                     // Associated order
    this.payment = new Payment();
    this.paymentMethods = Object.values(PaymentMethod); // Populates the PaymentMethod enum
    this.paymentStatuses = Object.values(PaymentStatus); // Populates the PaymentStatus enum
 
  }

  ngOnInit(): void {
  }
  // Method to update the payment status
  updatePaymentStatus(newStatus: PaymentStatus): void {
    this.paymentStatus = newStatus;
  }

  // Method to format the payment date
  getFormattedPaymentDate(): string {
    return this.paymentDate.toLocaleDateString();
  }

  onSubmit() {
    // Handle form submission logic
    console.log('Payment Saved', this.payment);
    // Implement saving logic (send data to the server or service)
  }
  cancel(){

  }
}
