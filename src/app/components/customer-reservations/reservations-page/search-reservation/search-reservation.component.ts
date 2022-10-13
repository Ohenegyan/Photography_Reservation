import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-reservation',
  templateUrl: './search-reservation.component.html',
  styleUrls: ['./search-reservation.component.css']
})
export class SearchReservationComponent implements OnInit {

  constructor(
    private service: ReservationService,
    private route: ActivatedRoute,
    private _location: Location) 
  
    { }

    reservation: Reservation | undefined;
    

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('Id');
        if(id){
          this.service.getReservation(id)
            .subscribe({
              next: (response) => {
                this.reservation = response;
              },
              error: (errorMessage) => {
                this._location.back();
                alert('There was an error, incorrect code')
              }
            })
        }
      }
    })
  }

}
