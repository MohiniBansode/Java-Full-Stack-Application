import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EMIPlanEntity } from '../emi-plan-entity';

@Injectable({
  providedIn: 'root'
})
export class EMIPlanService 
{
  private baseURL = "http://localhost:8083";

  constructor(private httpClient: HttpClient) { }

  getEmiPlanList(): Observable<EMIPlanEntity[]>
  {
    return this.httpClient.get<EMIPlanEntity[]>(`${this.baseURL + '/getEmiPlanList'}`);
  }

  createEmiPlan(emiplan: EMIPlanEntity): Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL + '/addEmiPlanToList'}`, emiplan);
  }

  getEmiPlanById(id: number): Observable<EMIPlanEntity>
  {
    return this.httpClient.get<EMIPlanEntity>(`${this.baseURL + '/getEmiPlanByIdfromList'}/${id}`);
  }

  updateEmiPlan(id: number, emiplan: EMIPlanEntity): Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL + '/updateEmiPlanInList'}/${id}`, emiplan);
  }

  deleteEmiPlan(id: number): Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL + '/deleteEmiPlanFromList'}/${id}`);
  }
}
