import { User } from "./user.model";

export class ServiceRequest {
  serviceID: number;
  serviceReqDate: string;
  serviceReqStatus: string;
  type: string;
  priority: string;
  client: User;
  techExpert: User;

  constructor() {
    this.serviceID = 0;
    this.serviceReqDate = "";
    this.serviceReqStatus = "";
    this.type = "";
    this.priority = "";
    this.client = new User();
    this.techExpert = new User();
  }
}