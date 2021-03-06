import { Approvisionnement } from './../model/approvisionnement.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApprovisionementService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getApprovisionnements(): Observable<Approvisionnement[]> {
    return this.http.get<Approvisionnement[]>(this.apiUrl + "/approvisionnements");

  }

  public getApprovisionnementById(id: number): Observable<Approvisionnement> {
    return this.http.get<Approvisionnement>(this.apiUrl + '/approvisionnements/' + id);
  }

  // HttpApprovisionnement API post() method => Create employee
  public createApprovisionnement(approvisionnement: Approvisionnement): Observable<Approvisionnement> {
    return this.http.post<Approvisionnement>(this.apiUrl + '/approvisionnements', approvisionnement);
  }

  // HttpApprovisionnement API put() method => Update employee
  public updateApprovisionnement(id: number, approvisionnement: Approvisionnement): Observable<Approvisionnement> {
    return this.http.put<Approvisionnement>(this.apiUrl + '/approvisionnements/' + id, approvisionnement);

  }

  // HttpApprovisionnement API delete() method => Delete employee
  public deleteApprovisionnementById(id: number){
    return this.http.delete<Approvisionnement>(this.apiUrl + '/approvisionnements/' + id)

  }

}
