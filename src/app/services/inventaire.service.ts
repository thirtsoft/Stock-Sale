import { Inventaire } from './../model/inventaire.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventaireService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getInventaires(): Observable<Inventaire[]> {
    return this.http.get<Inventaire[]>(this.apiUrl + "/inventaires");

  }

  public getInventaireById(id: number): Observable<Inventaire> {
    return this.http.get<Inventaire>(this.apiUrl + '/inventaires/' + id);
  }  

  // HttpInventaire  API post() method => Create Inventaire
  public createInventaire (inventaire: Inventaire ): Observable<Inventaire> {
    return this.http.post<Inventaire >(this.apiUrl + '/inventaires', inventaire);
  }  

  // HttpInventaire  API put() method => Update Inventaire
  public updateInventaire (id: number, inventaire : Inventaire ): Observable<Inventaire> {
    return this.http.put<Inventaire >(this.apiUrl + '/inventaires/' + id, inventaire );
    
  }

  // HttpInventaire  API delete() method => Delete Inventaire
  public deleteInventaireById(id: number){
    return this.http.delete<Inventaire >(this.apiUrl + '/inventaires/' + id)
    
  }

}
