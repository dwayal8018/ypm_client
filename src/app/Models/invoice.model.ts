export interface Invoice {
    id: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    netAmount: number;
    transactionID: string;
    paymentID: number;
    orderID: number;
  }