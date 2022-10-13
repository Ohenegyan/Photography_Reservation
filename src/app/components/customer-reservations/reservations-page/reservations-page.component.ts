import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UpdateReservation } from 'src/app/models/update-reservation';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.css']
})
export class ReservationsPageComponent implements OnInit {

 // @Input() checkMyReservationCode : any;

  constructor(private service: ReservationService) { }

  ngOnInit(): void {
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 7;
  }
  minDate = new Date();
  reservationId : string = '';

  submitted =false;
  reservationFormClicked = false;
  
  reservationForm = new FormGroup({
    Name: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ] ),
    Email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]),
    Phone: new FormControl('', Validators.required),
    ReservationDate:new FormControl('',Validators.required),
    SessionType: new FormControl('',Validators.required),
    ReservationLocation: new FormControl('', Validators.required),
    ExpectedNumOfPeople: new FormControl(''),
    AdditionalInfo: new FormControl(''),
  });

  // check_form_reservation = new FormGroup({
  //   Id: new FormControl('')
  // });

  

  onSubmit(){
    this.submitted = true;
    console.log(this.reservationForm.value);
    this.service.createReservation(this.reservationForm.value)
      .subscribe((result) => {
        alert('Reservation Created Successfully')
        
      })
   
  }

  alertMessage( id: string){
    console.log(id.length);
  }

  // onSubmitCheckReservationForm(){

  //   this.service.getReservation(this.checkMyReservationCode)
  //     .subscribe((result : UpdateReservation) => {
  //       console.log(result);
  //     })
  // }

  validation_message = {
    'Name': [
      { type: 'required', message: 'Name is required'},
      { type: 'minLength', message: 'Name must be at least 2 characters long'}
    ], 
    'Email': [
      { type: 'required', message: 'Email is required'},
      { type: 'pattern', message: 'Enter a valid Email'}
    ],

    'Phone': [
      { type: 'required', message: 'Phone is required'},

    ],
    'ReservationDate': [
      { type: 'required', message: 'Date is required'}
    ],
    'SessionType': [
      { type: 'required', message: 'The type of session is required'}
    ],

    'ReservationLocation' : [
      { type: 'required', message: 'Please enter a location'}
    ]
  }

}
