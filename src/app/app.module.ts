import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPgComponent } from './login-pg/login-pg.component';
import { ViewfoodComponent } from './viewfood/viewfood.component';
import { SearchRestaurantComponent } from './search-restaurant/search-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPgComponent,
    ViewfoodComponent,
    SearchRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
