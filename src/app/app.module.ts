import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { WelcomeComponentComponent } from './welcome-component/welcome-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { InsuranceServiceComponentComponent } from './insurance-service-component/insurance-service-component.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserDetailComponentComponent } from './user-detail-component/user-detail-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageNotFoundComponentComponent,
    UserListComponentComponent,
    WelcomeComponentComponent,
    UserComponentComponent,
    InsuranceServiceComponentComponent,
    UserDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
