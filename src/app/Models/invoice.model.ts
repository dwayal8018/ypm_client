export class Invoice {
  id: number;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  netAmount: number;
  transactionID: string;
  paymentID: number;
  orderID: number;

  constructor() {
    this.id = 0;
    this.quantity = 0;
    this.unitPrice = 0;
    this.totalPrice = 0;
    this.netAmount = 0;
    this.transactionID = "";
    this.paymentID = 0;
    this.orderID = 0;
  }
}