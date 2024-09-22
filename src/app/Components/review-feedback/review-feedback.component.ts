import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-feedback',
  templateUrl: './review-feedback.component.html',
  styleUrls: ['./review-feedback.component.css']
})
export class ReviewFeedbackComponent implements OnInit {
  reviewFeedback = {
    reviewID: 1,
    reviewRating: 5,
    feedback: 'Excellent service!'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
