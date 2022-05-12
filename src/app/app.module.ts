import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderComponent } from './order/order.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListgiftsComponent } from './listgifts/listgifts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    OrderComponent,
    ListproductComponent,
    ListuserComponent,
    ViewUserComponent,
    ListgiftsComponent,
    AddproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
