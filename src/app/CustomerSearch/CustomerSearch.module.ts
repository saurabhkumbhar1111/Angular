
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerSearchComponent } from './CustomerSearch.component';
import { CustomerSearchRoutes } from './CustomerSearchRouting';
import { CommonModule } from '@angular/common';
import { JwtInterceptor } from '../Utilities/Utility.Interceptor';



@NgModule({
  declarations: [
    CustomerSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerSearchRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}],
  bootstrap: [CustomerSearchComponent]
})
export class CustomerSearchModule { }
