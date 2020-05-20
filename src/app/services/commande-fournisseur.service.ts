import { CommandeFournisseur } from './../model/commande-Fournisseur.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeFournisseurService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getCommandeFournisseurs(): Observable<CommandeFournisseur[]> {
    return this.http.get<CommandeFournisseur[]>(this.apiUrl + "/commandeFournisseurs");

  }

  public getCommandeFournisseurById(id: number): Observable<CommandeFournisseur> {
    return this.http.get<CommandeFournisseur>(this.apiUrl + '/commandeFournisseurs/' + id);
  }

  // HttpCommandeFournisseur API post() method => Create employee
  public createCommandeFournisseur(commandeFournisseur: CommandeFournisseur): Observable<CommandeFournisseur> {
    return this.http.post<CommandeFournisseur>(this.apiUrl + '/commandeFournisseurs', commandeFournisseur);
  }

  // HttpCommandeFournisseur API put() method => Update employee
  public updateCommandeFournisseur(id: number, commandeFournisseur: CommandeFournisseur): Observable<CommandeFournisseur> {
    return this.http.put<CommandeFournisseur>(this.apiUrl + '/commandeFournisseurs/' + id, commandeFournisseur);

  }

  // HttpCommandeFournisseur API delete() method => Delete employee
  public deleteCommandeFournisseurById(id: number){
    return this.http.delete<CommandeFournisseur>(this.apiUrl + '/commandeFournisseurs/' + id)

  }

}
