import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { GurusdenComponent } from './gurusden/gurusden.component';
import { PrivatechatComponent } from './privatechat/privatechat.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GurusdenComponent,
    PrivatechatComponent,
    ChatsComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'gurusden',
        component: GurusdenComponent
      },
      {
        path: 'privatechat',
        component: PrivatechatComponent
      },
      {
        path: 'chat/:id',
        component: ChatsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
