import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './Home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './HomeRouting';
import { MasterPageComponent } from './MasterPage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerLoginComponent } from '../CustomerLogin/CustomerLogin.component';
import { User } from '../CustomerLogin/CustomerLogin.model';
import { SecurityLogic } from '../Utilities/Utility.AuthGuard';
import { JwtInterceptor } from '../Utilities/Utility.Interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HomeComponent,
    CustomerLoginComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(HomeRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [User, SecurityLogic,
  { provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
