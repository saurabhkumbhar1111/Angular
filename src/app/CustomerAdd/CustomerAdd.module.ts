
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerAddComponent } from './CustomerAdd.component';
import { CustomerAddRoutes } from './CustomerAddRouting';
import { CommonModule } from '@angular/common';
import { JwtInterceptor } from '../Utilities/Utility.Interceptor';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    CustomerAddComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerAddRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
  ],
  providers: [ { provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}],
  bootstrap: [CustomerAddComponent]
})
export class CustomerAddModule { }
