import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthenticationService } from './service/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DisplayFoodItemComponent } from './display-food-item/display-food-item.component';
import { CartComponent } from './cart/cart.component';
import { CartServiceService } from './service/cart-service.service';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddNewFoodItemComponent } from './admin-add-new-food-item/admin-add-new-food-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HomeScreenComponent,
    LoginComponent,
    SignupComponent,
    ContactUsComponent,
    AboutUsComponent,
    DisplayFoodItemComponent,
    CartComponent,
    PaymentGatewayComponent,
    AdminHomeComponent,
    AdminAddNewFoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'foodItems', component: DisplayFoodItemComponent },
      { path: 'cart', component: CartComponent },
      { path: 'payment', component: PaymentGatewayComponent },
      { path: 'adminhome', component: AdminHomeComponent },
      { path: 'addNewItem', component: AdminAddNewFoodItemComponent },
    ])
  ],
  providers: [AuthenticationService,
    CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
