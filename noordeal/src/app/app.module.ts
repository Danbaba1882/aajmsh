import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ProductService } from './product.service';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from './terms/about/about.component';
import { TermsComponent } from './terms/terms.component';
import { Covid19Component } from './covid19/covid19.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DppolicyComponent } from './dppolicy/dppolicy.component';
import { StoredirComponent } from './storedir/storedir.component';
import { TrackComponent } from './track/track.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductDetailsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    FaqsComponent,
    PrivacyComponent,
    AboutComponent,
    TermsComponent,
    Covid19Component,
    BlogComponent,
    ContactComponent,
    DppolicyComponent,
    StoredirComponent,
    TrackComponent,
    WishlistComponent,
    ProductUploadComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'product/:productId',
        component: ProductDetailsComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'admin',
        component: AdmindashboardComponent
      },
      {
        path: 'uploads',
        component: ProductUploadComponent
      }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
