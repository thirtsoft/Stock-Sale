import { Utilisateur } from './../model/utilisateur.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiUrl = "http://localhost:8080/admin_stock";

  constructor(private http: HttpClient) { }

  public getUtilisateurs(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.apiUrl + "/utilisateurs");

  }

  public getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.apiUrl + '/utilisateurs/' + id);
  }  

  // HttpUtilisateur API post() method => Create Utilisateur
  public createUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.apiUrl + '/utilisateurs', utilisateur);
  }  

  // HttpUtilisateur API put() method => Update Utilisateur
  public updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(this.apiUrl + '/utilisateurs/' + id, utilisateur);
    
  }

  // HttpUtilisateur API delete() method => Delete Utilisateur
  public deleteUtilisateurById(id: number){
    return this.http.delete<Utilisateur>(this.apiUrl + '/utilisateurs/' + id)
    
  }


}
