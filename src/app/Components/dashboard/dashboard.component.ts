import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRole: string | null = null;
  // tech expert,client,admin
  constructor(private router: Router) {


  }

  ngOnInit(): void {
    // Retrieve user role from local storage or any other source
    // this.userRole = localStorage.getItem('userRole');
    this.userRole = 'admin'
    // Redirect to login if the user is not authenticated
    if (!this.userRole) {
      this.router.navigate(['/login']);
    }
  }
}
