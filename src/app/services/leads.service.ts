import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Lead} from '../interface/lead'
@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  baseurl: string = `http://localhost:3000/api/leads`
  constructor(private _HttpClient:HttpClient) { }
  
  getLeads(): Observable<Lead[]> {
    return this._HttpClient.get<Lead[]>(this.baseurl);
  }

  getPotentialDuplicates(lead_id:string):Observable<Lead[]> {
    return this._HttpClient.get<Lead[]>(this.baseurl+`/${lead_id}/potential-duplicates`);
  }

  updateLead(Data:Lead , lead_id:string): Observable<Lead[]>{
    return this._HttpClient.put<Lead[]>(this.baseurl + `/${lead_id}`, Data);
  }

}
