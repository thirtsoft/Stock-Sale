import { Vente } from './../model/vente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private apiUrl = "http://localhost:8080/admin_stock";

  constructor(private http: HttpClient) { }

  public getVentes(): Observable<Vente> {
    return this.http.get<Vente>(this.apiUrl + "/ventes");

  }

  public getVenteById(id: number): Observable<Vente> {
    return this.http.get<Vente>(this.apiUrl + '/ventes/' + id);
  }  

  // HttpVente API post() method => Create Vente
  public createVente(vente: Vente): Observable<Vente> {
    return this.http.post<Vente>(this.apiUrl + '/ventes', vente);
  }  

  // HttpVente API put() method => Update Vente
  public updateVente(id: number, vente: Vente): Observable<Vente> {
    return this.http.put<Vente>(this.apiUrl + '/ventes/' + id, vente);
    
  }

  // HttpVente API delete() method => Delete Vente
  public deleteVenteById(id: number){
    return this.http.delete<Vente>(this.apiUrl + '/ventes/' + id)
    
  }


}
