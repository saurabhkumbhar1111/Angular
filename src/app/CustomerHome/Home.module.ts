import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './Home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './HomeRouting';
import { MasterPageComponent } from './MasterPage.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(HomeRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeModule { }
