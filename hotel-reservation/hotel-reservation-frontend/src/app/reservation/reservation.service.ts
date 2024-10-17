import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = []
  private baseUrl = 'http://localhost:8080'

  // CRUD 

  constructor(private http: HttpClient ){
    // let savedReservations = localStorage.getItem("reservations")
    // this.reservations = savedReservations? JSON.parse(savedReservations):[]
  }

  getReservations() : Observable<Reservation[]> {
    //return this.reservations
    return this.http.get<Reservation[]>(this.baseUrl + '/list')
  }

  getReservation(id:string) : Observable<Reservation>{
    //return this.reservations.find(res => res.id === id)
    return this.http.get<Reservation>(this.baseUrl + '/list/'+id)
  }

  addReservation(reservation:Reservation) : Observable<void> {
    // reservation.id = Date.now().toString()
    // this.reservations.push(reservation)
    // localStorage.setItem("reservations",JSON.stringify(this.reservations))

    return this.http.post<void>(this.baseUrl + '/new' , reservation)
  }

  deleteReservation(id:string) : Observable<Reservation>{
    // let index = this.reservations.findIndex(res => res.id === id)
    // this.reservations.splice(index,1)
    // localStorage.setItem("reservations",JSON.stringify(this.reservations))

    return this.http.delete<Reservation>(this.baseUrl +'/list/'+id)

  }

  updateReservation(id:string, updatedReservation:Reservation) : Observable<void> {
    // let index = this.reservations.findIndex(res => res.id === id)
    // this.reservations[index]= updatedReservation;
    // localStorage.setItem("reservations",JSON.stringify(this.reservations))

    return this.http.put<void>(this.baseUrl + '/new/' +id , updatedReservation)

  }

}
