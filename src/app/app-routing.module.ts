import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPageComponent } from './components/admin-page/admin-edit-page/admin-edit-page.component';
import { AdminHomePageComponent } from './components/admin-page/admin-home-page/admin-home-page.component';
import { AboutUsComponent } from './components/core/about-us/about-us.component';
import { HomeComponent } from './components/core/home/home.component';
import { PicturesComponent } from './components/core/pictures/pictures.component';
import { ReservationsPageComponent } from './components/customer-reservations/reservations-page/reservations-page.component';
import { SearchReservationComponent } from './components/customer-reservations/reservations-page/search-reservation/search-reservation.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent}, 
  { path: 'about-us', component: AboutUsComponent},
  { path: 'pictures', component: PicturesComponent}, 
  { path: 'reservations-page', component: ReservationsPageComponent},
  { path: 'admin-home-page', component: AdminHomePageComponent},
  { path: 'admin-edit-page/:Id', component: AdminEditPageComponent},
  { path: 'reservations-page/search-reservation/:Id', component: SearchReservationComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
