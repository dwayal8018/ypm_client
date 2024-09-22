export interface Payment {
    id: number;
    paymentMethod: string;
    paymentStatus: string;
    paymentDate: string;
    orderID: number;
  }