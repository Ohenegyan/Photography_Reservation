import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Reservation } from '../models/reservation';
import { UpdateReservation } from '../models/update-reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  constructor(private service: HttpClient) { }


  getAllReservations(): Observable<Reservation[]>{
    return this.service.get<Reservation[]>(`${environment.apiUrl}`);
  }

  createReservation(data: any): Observable<any[]>{
    return this.service.post<any[]>(`${environment.apiUrl}`, data);
  }


  getReservation(id: string) : Observable<Reservation> {
    return this.service.get<Reservation>(environment.apiUrl + `/${id}`);
  }

  updateReservation(id : string  | undefined, reservation: UpdateReservation) : Observable<UpdateReservation>{
    return this.service.put<UpdateReservation>(`${environment.apiUrl}/ ${id}`, reservation);
  }


  deleteReservation(id: string | undefined) : Observable<Reservation> {
    return this.service.delete<Reservation>(environment.apiUrl + `/${id}`);
  }
  

}
