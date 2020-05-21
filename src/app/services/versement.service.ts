import { Versement } from './../model/versement.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersementService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getVersements(): Observable<Versement[]> {
    return this.http.get<Versement[]>(this.apiUrl + "/versements");

  }

  public getVersementById(id: number): Observable<Versement> {
    return this.http.get<Versement>(this.apiUrl + '/versements/' + id);
  }

  // HttpVersement  API post() method => Create Versement
  public createVersement (versement: Versement ): Observable<Versement> {
    return this.http.post<Versement >(this.apiUrl + '/versements', versement);
  }

  // HttpVersement  API put() method => Update Versement
  public updateVersement (id: number, versement : Versement ): Observable<Versement> {
    return this.http.put<Versement >(this.apiUrl + '/versements/' + id, versement );

  }

  // HttpVersement  API delete() method => Delete Versement
  public deleteVersementById(id: number){
    return this.http.delete<Versement>(this.apiUrl + '/versements/' + id)

  }

}
