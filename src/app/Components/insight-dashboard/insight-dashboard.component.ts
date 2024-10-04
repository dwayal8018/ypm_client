import { Component, OnInit } from '@angular/core';
import { ArcElement, BarController, BarElement, CategoryScale, Chart, DoughnutController, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from 'chart.js';

@Component({
  selector: 'app-insight-dashboard',
  templateUrl: './insight-dashboard.component.html',
  styleUrls: ['./insight-dashboard.component.css']
})
export class InsightDashboardComponent implements OnInit {


  userCount: number = 100;
  pendingServiceRequests: number = 150;
  ordersInProgress: number = 200;
  totalPayments: number = 50;


  constructor() { }

  ngOnInit(): void {
    Chart.register(CategoryScale, LinearScale, BarController, BarElement, LineController, LineElement, PointElement, ArcElement, Tooltip, Legend,DoughnutController);


    this.renderInventoryChart();
    this.renderOrderRevenueChart();
    this.renderFulfillmentTimeChart();
    this.renderSatisfactionChart();
  }

  // ngOnInit(): void {
  //   this.loadDashboardData();
  // }

  loadDashboardData() {
    //   this.adminService.getDashboardStats().subscribe(stats => {
    //     this.userCount = stats.users;
    //     this.pendingServiceRequests = stats.pendingServiceRequests;
    //     this.ordersInProgress = stats.ordersInProgress;
    //     this.totalPayments = stats.totalPayments;
    //   });
  }

  renderInventoryChart() {
    const canvas = document.getElementById('inventoryChart') as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const inventoryChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Total Stock', 'Low Stock Items'],
            datasets: [{
              label: 'Inventory',
              data: [1200, 20],
              backgroundColor: ['#3f51b5', '#ff9800'],
              borderColor: ['#3f51b5', '#ff9800'],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }
  renderOrderRevenueChart(): void {
    const canvas = document.getElementById('orderRevenueChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Pending Orders', 'Completed Orders', 'Revenue'],
            datasets: [{
              label: 'Insights',
              data: [50, 200, 50000], // Sample data for orders and revenue
              backgroundColor: ['#ff6384', '#36a2eb', '#4caf50'],
              borderColor: ['#ff6384', '#36a2eb', '#4caf50'],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }

  renderFulfillmentTimeChart(): void {
    const canvas = document.getElementById('fulfillmentTimeChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Sample timeline
            datasets: [{
              label: 'Avg Order Fulfillment Time (days)',
              data: [5, 4, 6, 3], // Sample data
              backgroundColor: '#ff9800',
              borderColor: '#ff9800',
              fill: false,
              tension: 0.1
            }, {
              label: 'Avg Service Completion Time (days)',
              data: [7, 6, 5, 4], // Sample data
              backgroundColor: '#3f51b5',
              borderColor: '#3f51b5',
              fill: false,
              tension: 0.1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }

  renderSatisfactionChart(): void {
    const canvas = document.getElementById('satisfactionChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut', // Set chart type to 'doughnut'
          data: {
            labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Unsatisfied'],
            datasets: [{
              label: 'User Satisfaction',
              data: [40, 30, 20, 10], // Example data
              backgroundColor: [
                '#4caf50', // Very Satisfied
                '#8bc34a', // Satisfied
                '#ffeb3b', // Neutral
                '#f44336'  // Unsatisfied
              ],
              hoverOffset: 4 // Optional: adds a hover effect
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.label}: ${context.raw}%`, // Custom tooltip
                }
              }
            }
          }
        });
      }
    }
  }
}