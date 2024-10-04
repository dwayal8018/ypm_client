import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ServiceRequestComponent } from '../service-request/service-request.component';
import { PcComponentComponent } from '../pc-component/pc-component.component';
import { ComponentInventoryComponent } from '../component-inventory/component-inventory.component';
import { OrdersComponent } from '../orders/orders.component';
import { PaymentComponent } from '../payment/payment.component';
import { ReviewFeedbackComponent } from '../review-feedback/review-feedback.component';
import { CustomPcBuildComponent } from '../custom-pc-build/custom-pc-build.component';
import { DeliveryComponent } from '../delivery/delivery.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { UserComponent } from '../user/user.component';
import { InsightDashboardComponent } from '../insight-dashboard/insight-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: InsightDashboardComponent },
      { path: 'insight-dashboard', component: InsightDashboardComponent },
      { path: 'user-management', component: UserComponent },
      { path: 'service-requests', component: ServiceRequestComponent },
      { path: 'pc-builds', component: CustomPcBuildComponent },
      { path: 'pc-components', component: PcComponentComponent },
      { path: 'inventory', component: ComponentInventoryComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'payments', component: PaymentComponent },
      { path: 'invoices', component: InvoiceComponent },
      { path: 'delivery', component: DeliveryComponent },
      { path: 'reviews', component: ReviewFeedbackComponent },
      // { path: 'dashboard', component: DashboardOverviewComponent },
      // { path: 'user-management', component: UserManagementComponent },
      // { path: 'service-requests', component: ServiceRequestComponent },
      // { path: 'pc-builds', component: PcComponentComponent },
      // { path: 'inventory', component: ComponentInventoryComponent },
      // { path: 'orders', component: OrdersComponent },
      // { path: 'payments', component: PaymentComponent },
      // { path: 'reviews', component: ReviewFeedbackComponent },
      // { path: 'settings', component: AdminSettingsComponent }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class DashboardModule { }
