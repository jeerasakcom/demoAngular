import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/frontend/about/about.component';
import { AllProductsComponent } from './pages/frontend/all-products/all-products.component';
import { ContactComponent } from './pages/frontend/contact/contact.component';
import { HomeComponent } from './pages/frontend/home/home.component';
import { InformationComponent } from './pages/frontend/information/information.component';
import { PaymentComponent } from './pages/frontend/payment/payment.component';
import { DashboardComponent } from './pages/backend/dashboard/dashboard.component';
import { ReportsComponent } from './pages/backend/reports/reports.component';
import { SettingComponent } from './pages/backend/setting/setting.component';
import { StockComponent } from './pages/backend/stock/stock.component';
import { UsersComponent } from './pages/backend/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { HeaderBackendComponent } from './shared/backend/header-backend/header-backend.component';
import { FooterBackendComponent } from './shared/backend/footer-backend/footer-backend.component';
import { SidebarComponent } from './shared/backend/sidebar/sidebar.component';
import { HeaderFrontendComponent } from './shared/frontend/header-frontend/header-frontend.component';
import { FooterFrontendComponent } from './shared/frontend/footer-frontend/footer-frontend.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AllProductsComponent,
    ContactComponent,
    HomeComponent,
    InformationComponent,
    PaymentComponent,
    DashboardComponent,
    ReportsComponent,
    SettingComponent,
    StockComponent,
    UsersComponent,
    LoginComponent,
    BackendLayoutComponent,
    FrontendLayoutComponent,
    LoginLayoutComponent,
    HeaderBackendComponent,
    FooterBackendComponent,
    SidebarComponent,
    HeaderFrontendComponent,
    FooterFrontendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,

    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
