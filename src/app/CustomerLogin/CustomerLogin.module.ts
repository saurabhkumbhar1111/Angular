
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './CustomerLogin.component';
import { CustomerLoginRoutes } from './CustomerLogin.Routing';



@NgModule({
  declarations: [
    CustomerLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerLoginRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CustomerLoginComponent]
})
export class CustomerLoginModule { }
