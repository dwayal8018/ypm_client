import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/Services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  invoiceId: string=""; // Holds the current invoice ID
  invoiceDate: Date=new Date();
  dueDate: Date=new Date();
  customerName: string="";
  customerAddress: string="";
  customerEmail: string="";
  invoiceItems: any[] = []; // List of items in the invoice
  subtotal: number = 0;
  taxRate: number = 5; // Tax rate (example: 5%)
  tax: number = 0;
  invoiceNumber: number = 1;
  discount: number = 0; // Discount if any
  total: number = 0;
  paymentStatus: string = 'Unpaid'; // Status of the payment
  paymentMethod: string = 'Credit Card'; // Default payment method
  
  invoice = {
    invoiceID: 1,
    totalPrice: 399.99
  };

  constructor(
    private invoiceService: InvoiceService,
    private route: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit(): void {
    this.invoiceId = this.route.snapshot.paramMap.get('id') || ''; // Get invoice ID from URL
    this.fetchInvoiceDetails();
  }

  // Fetches invoice details from the backend (through a service)
  fetchInvoiceDetails(): void {
    this.invoiceService.getInvoiceById(this.invoiceId).subscribe(invoice => {
      this.invoiceDate = invoice.date;
      this.dueDate = invoice.dueDate;
      this.customerName = invoice.customer.name;
      this.customerAddress = invoice.customer.address;
      this.customerEmail = invoice.customer.email;
      this.invoiceItems = invoice.items;
      this.discount = invoice.discount || 0;
      this.calculateInvoice();
    });
  }

  // Calculates the subtotal, tax, and total for the invoice
  calculateInvoice(): void {
    this.subtotal = this.invoiceItems.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
    this.tax = (this.subtotal * this.taxRate) / 100;
    this.total = this.subtotal + this.tax - this.discount;
  }

  // Method to handle payment process (integrate your payment gateway here)
  payInvoice(): void {
    // Integrate payment gateway logic (e.g., Stripe, PayPal, etc.)
    this.invoiceService.payInvoice(this.invoiceId).subscribe(response => {
      if (response.success) {
        this.paymentStatus = 'Paid';
        alert('Payment successful');
      } else {
        alert('Payment failed. Please try again.');
      }
    });
  }

  // Method to print the invoice
  printInvoice(): void {
    window.print();
  }

  // Method to download the invoice as a PDF
  downloadInvoicePDF(): void {
    this.invoiceService.downloadInvoicePDF(this.invoiceId).subscribe(response => {
      // Handle the file download here (usually Blob format)
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Invoice-${this.invoiceId}.pdf`;
      link.click();
    });
  }

  // Method to email the invoice
  emailInvoice(): void {
    this.invoiceService.emailInvoice(this.invoiceId).subscribe(response => {
      if (response.success) {
        alert('Invoice emailed successfully');
      } else {
        alert('Failed to send email. Please try again.');
      }
    });
  }

  // Cancel and navigate back to the previous page
  // cancelPage(): void {
  //   this.location.back();
  // }
}
