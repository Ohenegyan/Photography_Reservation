import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/core/home/home.component';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { PicturesComponent } from './components/core/pictures/pictures.component';
import { AdminHomePageComponent } from './components/admin-page/admin-home-page/admin-home-page.component';
import { AdminEditPageComponent } from './components/admin-page/admin-edit-page/admin-edit-page.component';
import { ReservationsPageComponent } from './components/customer-reservations/reservations-page/reservations-page.component';
import { SearchReservationComponent } from './components/customer-reservations/reservations-page/search-reservation/search-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    PicturesComponent,
    AdminHomePageComponent,
    AdminEditPageComponent,
    ReservationsPageComponent,
    SearchReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
