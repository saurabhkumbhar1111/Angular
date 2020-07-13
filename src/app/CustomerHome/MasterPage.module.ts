import { NgModule } from '@angular/core';
import { MasterPageComponent } from './MasterPage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    MasterPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: []
})
export class MasterPageModule { }