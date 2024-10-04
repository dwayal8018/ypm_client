import { User } from "./user.model";

export class ReviewFeedback {
  id: number;
  user:string;
  comment:string;
  reviewRating: number;
  feedback: string;
  techExpert: User;
  client: User;
  service: User;

  constructor(
    id: number,
    reviewRating: number,
    user: string,
    comment: string,
    feedback: string,
    techExpert: number,
    client: number,
    service: number
) {
    this.id = id;
    this.user = user;
    this.comment = comment;
    this.reviewRating = reviewRating;
    this.feedback = feedback;
    this.techExpert = new User();
    this.client = new User() ;
    this.service = new User();
}
  // constructor() {
  //     this.id = 0; // Default value for id
  //     this.user="";
  //     this.comment="";
  //     this.reviewRating = 0; // Default value for reviewRating
  //     this.feedback = ""; // Default value for feedback
  //     this.techExpert= new User(); // Default value for techExpertID
  //     this.client = new User(); // Default value for clientID
  //     this.service = new User(); // Default value for serviceID
  // }
}