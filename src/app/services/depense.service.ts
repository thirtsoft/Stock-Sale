import { Depense } from './../model/depense.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getDepenses(): Observable<Depense[]> {
    return this.http.get<Depense[]>(this.apiUrl + "/depenses");

  }

  public getDepenseById(id: number): Observable<Depense> {
    return this.http.get<Depense>(this.apiUrl + '/depenses/' + id);
  }

  // HttpDepense API post() method => Create employee
  public createDepense(depense: Depense): Observable<Depense> {
    return this.http.post<Depense>(this.apiUrl + '/depenses', depense);
  }

  // HttpDepense API put() method => Update employee
  public updateDepense(id: number, depense: Depense): Observable<Depense> {
    return this.http.put<Depense>(this.apiUrl + '/depenses/' + id, depense);

  }

  // HttpDepense API delete() method => Delete employee
  public deleteDepenseById(id: number){
    return this.http.delete<Depense>(this.apiUrl + '/depenses/' + id)

  }

}
