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
import { CategoryComponent } from './category/category.component';
import { SubcategoryoneComponent } from './subcategoryone/subcategoryone.component';
import { SubcategorytwoComponent } from './subcategorytwo/subcategorytwo.component';
import { BrandComponent } from './brand/brand.component';


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
    CategoryComponent,
    OrdersComponent,
    UsersComponent,
    ProductlisterComponent,
    CategoryComponent,
    SubcategoryoneComponent,
    SubcategorytwoComponent,
    BrandComponent
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
        path: 'product/:id',
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
        path: 'product-listers',
        component: ProductlisterComponent
      },
      {
        path: 'add-product-lister',
        component: ProductlisterComponent
      },
      {
        path: 'edit-product-lister',
        component: ProductlisterComponent
      },
      {
        path: 'edit-product',
        component: EditproductComponent
      },
      {
        path: 'Smartphones',
        component: CategoryComponent
      },
      {
        path: 'Tablets',
        component: CategoryComponent
      },
      {
        path: 'Mobile-Phones',
        component: CategoryComponent
      },
      {
        path: 'Smart-Homes',
        component: CategoryComponent
      },
      {
        path: 'noordeal-admin',
        component: AdminloginComponent
      },
      {
        path: 'Computer-and-Accessories',
        component: CategoryComponent
      },
      {
        path: 'Mobile-Accessories',
        component: CategoryComponent
      },
      {
        path: 'Cameras',
        component: CategoryComponent
      },
      {
        path: 'Electric-Scooters',
        component: CategoryComponent
      },
      {
        path: 'shop/Segway-Ninebot-Scooter',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/MI-Electric-Scooter',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Xiaomi-Mijia-Electric-Scooter',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/PC-Accessories',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Desktop-Computers',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Laptops',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Printers-and-Ink',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Networking',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Home-Theartres',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Projectors',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Tvs',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Video-Games-and-Consoles',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/DSLR-Cameras',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Speakers',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Cables',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Powerbanks',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Chargers',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Wearables',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Car-Accessories',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/Headphones',
        component: SubcategoryoneComponent
      },
      {
        path: 'shop/product/Wall-Charger',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Multi-port-Charger',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Wireless-Charger',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Smart-Watches',
        component: SubcategorytwoComponent
      },
       {
        path: 'shop/product/Smart-Bands',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Car-Charger',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Holders',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Wireless-and-Bluetooths',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Ear-Buds-and-In-Ear',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Over-Ear-and-On-Ear',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Kids-Headphones',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/PC-Gaming-Headsets',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Mouse',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Keyboards',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Monitors',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Mother-Board',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Processor',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Ram',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Hard-Disk',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Pen-Drives',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Computer-Cases',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/PC-Speakers',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Smart-Tvs',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Curved-Tvs',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/4K-UltraHD-Tvs',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/LED-Tvs',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/OLED-Tvs',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Play-Stations',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Xbox',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Game-Consoles',
        component: SubcategorytwoComponent
      },
      {
        path: 'shop/product/Gaming-Accessories',
        component: SubcategorytwoComponent
      },
      {
        path: 'brand/Iphone',
        component: BrandComponent
      },
      {
        path: 'brand/Samsung',
        component: BrandComponent
      },
      {
        path: 'brand/Xiaomi',
        component: BrandComponent
      },
      {
        path: 'brand/Huawei',
        component: BrandComponent
      },
      {
        path: 'brand/Honor',
        component: BrandComponent
      },
      {
        path: 'brand/Black-Shark',
        component: BrandComponent
      },
      {
        path: 'brand/Oppo',
        component: BrandComponent
      },
      {
        path: 'brand/Real-me',
        component: BrandComponent
      },
      {
        path: 'brand/Nubia',
        component: BrandComponent
      },
      {
        path: 'brand/Nokia',
        component: BrandComponent
      },
      {
        path: 'brand/One-Plus',
        component: BrandComponent
      },
    ],
    {
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
