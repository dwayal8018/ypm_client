import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  delivery = {
    deliveryID: 1,
    deliveryStatus: 'Shipped',
    deliveryAddress: '123 Main St, Anytown, USA'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
