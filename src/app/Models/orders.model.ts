import { CustomPCBuild } from "./custom-pc-build.model";
import { ServiceRequest } from "./service-request.model";
import { User } from "./user.model";

export class Orders {
  id: number;
  orderDate: string;
  orderStatus: string;
  totalCost: number;
  service: ServiceRequest;
  customPC: CustomPCBuild;
  client: User;


  constructor() {
    this.id= 0;
    this.orderDate= "";
    this.orderStatus= "";
    this.totalCost= 0.0;
    this.service =new ServiceRequest();
    this.customPC= new CustomPCBuild();
    this.client= new User();
  }
  
}
