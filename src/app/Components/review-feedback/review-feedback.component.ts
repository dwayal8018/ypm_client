import { Component, OnInit } from '@angular/core';
import { ReviewFeedback } from 'src/app/Models/review-feedback.model';

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
  reviews: ReviewFeedback[] = [];
  filteredReviews: ReviewFeedback[] = [];

  ngOnInit(): void {
    // Fetch initial review data (can be replaced with API call)
    this.reviews = [
      // new ReviewFeedback(1, 5, 'Great service!', 1, 1, 1),  // Example IDs, adjust as necessary
      // new ReviewFeedback(2, 4, 'Fast delivery.', 1, 2, 1),
      // new ReviewFeedback(3, 5, 'Highly recommended.', 1, 3, 1),
      // new ReviewFeedback(4, 3, 'Average experience.', 1, 4, 1),
      // new ReviewFeedback(5, 2, 'Not satisfied.', 1, 5, 1)
    ];
    this.filteredReviews = this.reviews; // Initialize filtered reviews
  }

  onSearch(event:any){

  }
  // onSearch(searchTerm: string): void {
  //   if (!searchTerm) {
  //     this.filteredReviews = this.reviews; // Reset to all reviews if no search term
  //   } else {
  //     this.filteredReviews = this.reviews.filter(review =>
  //       review.comment.toLowerCase().includes(searchTerm.toLowerCase())
  //     ); 
  //   }
  // }
  onFilterChange(event:any){

  }
  // onFilterChange(rating: string): void {
  //   if (!rating) {
  //     this.filteredReviews = this.reviews; // Reset to all reviews if no filter
  //   } else {
  //     const ratingValue = parseInt(rating, 10);
  //     // this.filteredReviews = this.reviews.filter(review => review.rating === ratingValue);
  //   }
  // }

  respondToFeedback(review: ReviewFeedback): void {
    // Logic for responding to feedback
    alert(`Responding to feedback from ${review.user}`);
  }

  deleteFeedback(reviewId: number): void {
    // Logic to delete feedback
    this.reviews = this.reviews.filter(review => review.id !== reviewId);
    this.filteredReviews = this.filteredReviews.filter(review => review.id !== reviewId);
    alert(`Feedback with ID ${reviewId} has been deleted.`);
  }
}
