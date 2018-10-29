import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonboxComponent } from './buttonbox/buttonbox.component';
import { ClockinComponent } from './clockin/clockin.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonboxComponent,
    ClockinComponent,
    EmployeeidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
