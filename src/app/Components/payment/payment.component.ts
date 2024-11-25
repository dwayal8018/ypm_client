import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/Models/orders.model';
import { Payment } from 'src/app/Models/payment.model';
import { OrderService } from 'src/app/Services/order.service';
import { PaymentService } from 'src/app/Services/payment.service';


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
  // id: number;
  // paymentMethod: PaymentMethod;
  // paymentStatus: PaymentStatus;
  // paymentDate: Date;
  // order: Orders;
  // payment: Payment;
  // paymentMethods: PaymentMethod[];
  // paymentStatuses: PaymentStatus[];
  // paymentForm: boolean = true;

  // payment = {
  //   paymentID: 1,
  //   amount: 299.99
  // };
  viewPage = true;
  editPage = false;
  currentPaymentId: number = 0;
  paymentList: Payment[] = [];
  ordersList: Orders[] = [];
  payment: Payment = new Payment();


  constructor(private paymentService: PaymentService,
    private orderService: OrderService,
  ) {
    // this.id = 0;
    // this.paymentMethod = PaymentMethod.CreditCard; // Default method
    // this.paymentStatus = PaymentStatus.Pending;    // Default status
    // this.paymentDate = new Date();                 // Current date
    // this.order = new Orders();                     // Associated order
    // this.payment = new Payment();
    // this.paymentMethods = Object.values(PaymentMethod); // Populates the PaymentMethod enum
    // this.paymentStatuses = Object.values(PaymentStatus); // Populates the PaymentStatus enum
 
  }

  ngOnInit(): void {
    this.getPayments();
    // this.getOrders();
  }
  getPayments() {
    this.paymentService.getAllPayments().subscribe(data => {
      this.paymentList = data;
    });
  }

  getOrders() {
    this.orderService.getAllOrders().subscribe(data => {
      this.ordersList = data;
    });
  }

  openAddPage() {
    this.editPage = true;
    this.viewPage = false;
    this.payment = new Payment();  // Reset the form for creating new payment
  }

  openEditPage(paymentId: number) {
    this.editPage = true;
    this.viewPage = false;
    this.paymentService.getPaymentById(paymentId).subscribe(data => {
      this.payment = data;
    });
  }

  onSubmit() {
    if (this.payment.id === 0) {
      this.paymentService.createPayment(this.payment).subscribe(() => {
        this.getPayments();
        this.cancelPage();
      });
    } else {
      this.paymentService.updatePayment(this.payment).subscribe(() => {
        this.getPayments();
        this.cancelPage();
      });
    }
  }

  deletePayment(paymentId: number) {
    this.paymentService.deletePayment(paymentId).subscribe(() => {
      this.getPayments();
    });
  }

  cancelPage() {
    this.viewPage = true;
    this.editPage = false;
  }
  getStatusClass(status: string) {
    switch(status) {
      case 'Completed':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'Failed':
        return 'red';
      default:
        return 'grey';
    }
  }
}
