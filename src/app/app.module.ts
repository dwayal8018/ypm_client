import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { InsightDashboardComponent } from './Components/insight-dashboard/insight-dashboard.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ServiceRequestComponent,
    CustomPcBuildComponent,
    PcComponentComponent,
    ComponentInventoryComponent,
    OrdersComponent,
    PaymentComponent,
    InvoiceComponent,
    DeliveryComponent,
    ReviewFeedbackComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    InsightDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
