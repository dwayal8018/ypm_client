import { User } from "./user.model";

export class CustomPCBuild {
  customPCID: number;
  buildType: string;
  budget: number| null;
  buildStatus: string;
  client: User;
  techExpert: User;
  admin: User;

  constructor() {
    this.customPCID = 0;
    this.buildType = "";
    this.budget = 0;
    this.buildStatus = "";
    this.client =new User();
    this.techExpert =new User();
    this.admin =new User();
  }
}
