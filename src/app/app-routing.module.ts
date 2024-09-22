import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { ComponentInventoryComponent } from './Components/component-inventory/component-inventory.component';
import { CustomPcBuildComponent } from './Components/custom-pc-build/custom-pc-build.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { InvoiceComponent } from './Components/invoice/invoice.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { PcComponentComponent } from './Components/pc-component/pc-component.component';
import { ReviewFeedbackComponent } from './Components/review-feedback/review-feedback.component';
import { ServiceRequestComponent } from './Components/service-request/service-request.component';
import { UserComponent } from './Components/user/user.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'service-requests', component: ServiceRequestComponent },
  { path: 'custom-pc-builds', component: CustomPcBuildComponent },
  { path: 'pc-components', component: PcComponentComponent },
  { path: 'component-inventories', component: ComponentInventoryComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'invoices', component: InvoiceComponent },
  { path: 'deliveries', component: DeliveryComponent },
  { path: 'review-feedbacks', component: ReviewFeedbackComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }, // Protect routes
  { path: '', redirectTo: '/register', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
