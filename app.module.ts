import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonboxComponent } from './buttonbox/buttonbox.component';
import { ClockinComponent } from './clockin/clockin.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';
import { MessagesComponent } from './messages/messages.component';
import { Timeclockinterceptor } from "./timeclockinterceptor";
import { NumberpadComponent } from './numberpad/numberpad.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonboxComponent,
    ClockinComponent,
    EmployeeidComponent,
    MessagesComponent,
    NumberpadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    AppComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Timeclockinterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
