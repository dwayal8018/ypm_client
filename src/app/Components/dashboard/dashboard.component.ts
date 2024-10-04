import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userRole: string | null = null;
  currentTab: string = "insight-dashboard";
  // tech expert,client,admin
  userName: string|null = "";
  tabs: { value: string; label: string; }[] = [];

  constructor(private router: Router) {
    this.userName=localStorage.getItem("username");
    if ("admin" === localStorage.getItem("userRole")) {
      this.tabs = [
        { value: 'insight-dashboard', label: 'Dashboard Overview' },
        { value: 'user-management', label: 'User Management' },
        { value: 'service-requests', label: 'Service Requests' },
        { value: 'pc-builds', label: 'Custom PC Builds' },
        { value: 'pc-components', label: 'PC Components' },
        { value: 'inventory', label: 'Inventory Management' },
        { value: 'orders', label: 'Order Management' },
        { value: 'delivery', label: 'Delivery' },
        { value: 'payments', label: 'Payment Processing' },
        { value: 'invoices', label: 'Invoice' },
        { value: 'reviews', label: 'Reviews & Feedback' },
        { value: 'settings', label: 'Settings' }
      ];
    } else if ("client" === localStorage.getItem("userRole")){
      this.tabs = [
        { value: 'insight-dashboard', label: 'Dashboard Overview' },
        { value: 'service-requests', label: 'Service Requests' },
        { value: 'pc-builds', label: 'Custom PC Builds' },
        { value: 'pc-components', label: 'PC Components' },
        // { value: 'inventory', label: 'Inventory Management' },
        // { value: 'orders', label: 'Order Management' },
        // { value: 'delivery', label: 'Delivery' },
        { value: 'payments', label: 'Payment Processing' },
        { value: 'invoices', label: 'Invoice' },
        { value: 'reviews', label: 'Reviews & Feedback' },
        // { value: 'settings', label: 'Settings' }
      ];
    }else if ("techExpert" === localStorage.getItem("userRole")){
      this.tabs = [
        { value: 'insight-dashboard', label: 'Dashboard Overview' },
        { value: 'service-requests', label: 'Service Requests' },
        { value: 'pc-builds', label: 'Custom PC Builds' },
        { value: 'pc-components', label: 'PC Components' },
        { value: 'inventory', label: 'Inventory Management' },
        // { value: 'orders', label: 'Order Management' },
        // { value: 'delivery', label: 'Delivery' },
        // { value: 'payments', label: 'Payment Processing' },
        // { value: 'invoices', label: 'Invoice' },
        { value: 'reviews', label: 'Reviews & Feedback' },
        // { value: 'settings', label: 'Settings' }
      ];
    }
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


  // Function to handle logout
  logout() {
    // Perform logout logic (e.g., clearing session, redirecting to login)
    this.router.navigate(['/login']);
    localStorage.clear();
  }

  // Navigate to different dashboard sections
  navigateTo(route: string) {
    this.currentTab = route;
    this.router.navigate([`/dashboard/${route}`]);
  }





}
