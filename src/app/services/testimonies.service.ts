import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimonals } from '../models/testimonals';

const API_ENDPOINT = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {

  testimonies: string ="http://localhost:3000/testimonies"

  constructor(private Http: HttpClient) { }

  //Get all business
  getAllTestimonies(): Observable<Testimonals[]>{
  return this.Http.get<Testimonals[]>(this.testimonies)
  }

  //pull one profile
  getOneBusiness(reqID: number): Observable<Testimonals>{
    return this.Http.get<Testimonals>(`${this.testimonies}/${reqID}`)
  }

  //create buisnes
  createBusiness(newBusiness: Testimonals) : Observable<Testimonals> {
    console.log(newBusiness)
    return this.Http.post<Testimonals>(`${this.testimonies}`, newBusiness)
  }

  //delete business
  deleteBusiness(reqId:number): Observable<any>{
    return this.Http.delete<Testimonals>(`${API_ENDPOINT}/testimonies/${reqId}`)
   // return this.Http.delete<Signup>(`${this.businesses}/${deleteBusiness}`)
  }

  //Update info
  updateBusiness(editID:number, edittedInfo: Testimonals): Observable<Testimonals>{
    return this.Http.put<Testimonals>(`${this.testimonies}/${editID}`, edittedInfo)
  }
}