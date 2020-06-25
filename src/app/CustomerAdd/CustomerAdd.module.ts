
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddComponent } from './CustomerAdd.component';
import { CustomerAddRoutes } from './CustomerAddRouting';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CustomerAddComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerAddRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CustomerAddComponent]
})
export class HomeModule { }
