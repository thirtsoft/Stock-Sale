import { Fournisseur } from './../model/fournisseur.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl + "/fournisseurs");

  }

  public getFournisseurById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(this.apiUrl + '/fournisseurs/' + id);
  }  

  // HttpFournisseur  API post() method => Create Fournisseur
  public createFournisseur (fournisseur: Fournisseur ): Observable<Fournisseur> {
    return this.http.post<Fournisseur >(this.apiUrl + '/fournisseurs', fournisseur);
  }  

  // HttpFournisseur  API put() method => Update Fournisseur
  public updateFournisseur (id: number, fournisseur : Fournisseur ): Observable<Fournisseur> {
    return this.http.put<Fournisseur >(this.apiUrl + '/fournisseurs/' + id, fournisseur );
    
  }

  // HttpFournisseur  API delete() method => Delete Fournisseur
  public deleteFournisseurById(id: number){
    return this.http.delete<Fournisseur >(this.apiUrl + '/fournisseurs/' + id)
    
  }

}
