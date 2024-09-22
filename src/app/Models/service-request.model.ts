export class ServiceRequest {
  serviceID: number;
  serviceReqDate: string;
  serviceReqStatus: string;
  type: string;
  priority: string;
  clientID: number|null;
  techExpertID: number|null;

  constructor() {
    this.serviceID = 0;
    this.serviceReqDate = "";
    this.serviceReqStatus = "";
    this.type = "";
    this.priority = "";
    this.clientID = null;
    this.techExpertID = null;
  }
}