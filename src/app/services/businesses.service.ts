import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from '../models/signup';

const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BusinessesService {

  businesses: string ="http://localhost:3000/businesses"

  constructor(private Http: HttpClient) { }

  //Get all business
  getAllBusinesses(): Observable<Signup[]>{
    return this.Http.get<Signup[]>(this.businesses)

  }
  //pull one profile
  getOneBusiness(reqID: number): Observable<Signup>{
    return this.Http.get<Signup>(`${this.businesses}/${reqID}`)
   }
  //Update info
  updateBusiness(editID:number, edittedInfo: Signup): Observable<Signup>{
    return this.Http.put<Signup>(`${this.businesses}/${editID}`, edittedInfo)
  }
  //delete business
  deleteBusiness(reqId:number): Observable<any>{
    return this.Http.delete<Signup>(`${API_ENDPOINT}/businesses/${reqId}`)
   // return this.Http.delete<Signup>(`${this.businesses}/${deleteBusiness}`)
  }
  //create buisnes
  createBusiness(newBusiness: Signup) : Observable<Signup> {
    return this.Http.post<Signup>(`${this.businesses}`, newBusiness)
  }
}
