import { Orders } from "./orders.model";

export class Payment {
  id: number;
  paymentMethod: string;
  paymentStatus: string;
  paymentDate: string;
  order: Orders;

  constructor() {
    this.id = 0;
    this.paymentMethod = "";
    this.paymentStatus = "";
    this.paymentDate = "";
    this.order = new Orders();
  }
}