import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    LoginComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
