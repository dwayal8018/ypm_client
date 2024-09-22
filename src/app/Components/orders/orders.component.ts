import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PCComponent } from 'src/app/Models/pc-component.model';
import { ServiceRequest } from 'src/app/Models/service-request.model';
import { MyApiService } from 'src/app/Services/order.service';
import { PCComponentService } from 'src/app/Services/pc-component.service';
import { ServiceRequestService } from 'src/app/Services/service-request.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orderForm: FormGroup;
  
  pcComponents :PCComponent []=[];
  serviceRequests : ServiceRequest[]=[];

  constructor(private fb: FormBuilder,
    private apiService: MyApiService,
    private componentService: PCComponentService,
    private serviceRequestService: ServiceRequestService,) {
    this.orderForm = this.fb.group({
      size: ['L'],
      serviceRequest: [null],
      components: [[]]
    });
  }

  ngOnInit() {


    this.loadPCComponents();
    this.loadServiceRequests();
  }

  loadPCComponents() {
    this.componentService.getComponents().subscribe(data => {
      this.pcComponents = data;
    });
  }

  loadServiceRequests() {
    this.serviceRequestService.getAllServiceRequests().subscribe(data => {
      this.serviceRequests = data;
    });
  }

  onComponentChange(event: any) {
    // const selectedComponents = this.orderForm.get('components').value;
    // if (event.target.checked) {
    //   selectedComponents.push(event.target.value);
    // } else {
    //   const index = selectedComponents.indexOf(event.target.value);
    //   if (index > -1) {
    //     selectedComponents.splice(index, 1);
    //   }
    // }
    // this.orderForm.get('components').setValue(selectedComponents);
  }

  onSubmit() {
    if (this.orderForm.valid) {
      // Submit the form data to the server
      console.log(this.orderForm.value);
    }
  }
}
