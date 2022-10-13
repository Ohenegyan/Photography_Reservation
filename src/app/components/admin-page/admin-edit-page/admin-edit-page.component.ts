import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';
import { UpdateReservation } from 'src/app/models/update-reservation';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-edit-reservations-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.css']
})
export class AdminEditPageComponent implements OnInit {   
  constructor(
    private service: ReservationService,
    private route : ActivatedRoute
    ) { }

 
  editReservation: Reservation | undefined;

  ngOnInit(): void {

    
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('Id');

        if (id){
          this.service.getReservation(id)
            .subscribe({
              next: (response ) => {
                this.editReservation = response;
              }
            })
        }
      }
    })
      
  }

  submitReservation(){

    const updateFormRequest: UpdateReservation = {
      Name: this.editReservation?.Name,
      Email: this.editReservation?.Email,
      Phone: this.editReservation?.Phone,
      ReservationDate: this.editReservation?.ReservationDate,
      SessionType: this.editReservation?.SessionType,
      ReservationLocation: this.editReservation?.ReservationLocation,
      ExpectedNumOfPeople: this.editReservation?.ExpectedNumOfPeople,
      AdditionalInfo: this.editReservation?.AdditionalInfo
    }

    this.service.updateReservation(this.editReservation?.Id, updateFormRequest)
      .subscribe((response) =>{
        alert('Reservation has been Updated Successfully')
      })
  }

  deleteReserve(){
    this.service.deleteReservation(this.editReservation?.Id)
      .subscribe((response) => {
        alert("Reservation has Been Deleted Successfully")
      })
  }

}



