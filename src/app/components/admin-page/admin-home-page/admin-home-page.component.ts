import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {
  reservations : Reservation[] = [];
  
  constructor( private service : ReservationService) { }

  ngOnInit(): void {
    this.service.getAllReservations()
      .subscribe({
        next: (reservation : Reservation[]) =>{
          this.reservations = reservation;
        }, 
        error: (response ) =>{
          console.log(response);
        }
      })
  }

  

}
