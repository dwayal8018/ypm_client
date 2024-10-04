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
   { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./Components/dashboard/dashboard.module').then(m => m.DashboardModule), // Lazy loading
  },
  { path: '', redirectTo: '/register', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
