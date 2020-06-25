
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomerSearchComponent } from './CustomerSearch.component';
import { CustomerSearchRoutes } from './CustomerSearchRouting';
import { CommonModule } from '@angular/common';



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
  providers: [],
  bootstrap: [CustomerSearchComponent]
})
export class CustomerSearchModule { }
