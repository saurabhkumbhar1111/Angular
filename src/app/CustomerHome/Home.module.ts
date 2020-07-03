import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './Home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './HomeRouting';
import { MasterPageComponent } from './MasterPage.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerLoginComponent } from '../CustomerLogin/CustomerLogin.component';
import { User } from '../CustomerLogin/CustomerLogin.model';
import { SecurityLogic } from '../Utilities/Utility.AuthGuard';



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
    HttpClientModule
  ],
  providers: [User, SecurityLogic],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
