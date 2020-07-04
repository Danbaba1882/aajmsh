import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';
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
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { Covid19Component } from './covid19/covid19.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DppolicyComponent } from './dppolicy/dppolicy.component';
import { StoredirComponent } from './storedir/storedir.component';
import { TrackComponent } from './track/track.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import { RefundComponent } from './refund/refund.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import * as $ from 'jquery';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProfileComponent } from './profile/profile.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { ProductlisterComponent } from './productlister/productlister.component';


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
    ProductUploadComponent,
    RefundComponent,
    DashboardSidebarComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    AllproductsComponent,
    ProfileComponent,
    EditproductComponent,
    OrdersComponent,
    UsersComponent,
    ProductlisterComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    EditorModule,
    AppRoutingModule,
    CKEditorModule,
    BrowserAnimationsModule,
    FlashMessagesModule.forRoot(),
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
      },
      {
        path: 'faqs',
        component: FaqsComponent
      },
      {
        path: 'terms-and-conditions',
        component: TermsComponent
      },
      {
        path: 'track-your-order',
        component: TrackComponent
      },
      {
        path: 'store-directory',
        component: StoredirComponent
      },
      {
        path: 'about-us',
        component: AboutComponent
      },
      {
        path: 'contact-us',
        component: ContactComponent
      },
      {
        path: 'about-covid-19',
        component: Covid19Component
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyComponent
      },
      {
        path: 'delivery-and-payment-policy',
        component: DppolicyComponent
      },
      {
        path: 'return-refund-and-cancellation-policy',
        component: RefundComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },
      {
        path: 'products',
        component: AllproductsComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'product-lister',
        component: ProductlisterComponent
      },
      {
        path: 'edit-product',
        component: EditproductComponent
      }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
