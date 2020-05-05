import { CommandeClient } from './../model/commande-Client.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeClientService {

  private apiUrl = "http://localhost:8080/admin_stock";

  constructor(private http: HttpClient) { }

  public getCommandeClients(): Observable<CommandeClient> {
    return this.http.get<CommandeClient>(this.apiUrl + "/commandeClients");

  }

  public getCommandeClientById(id: number): Observable<CommandeClient> {
    return this.http.get<CommandeClient>(this.apiUrl + '/commandeClients/' + id);
  }  

  // HttpCommandeClient API post() method => Create commandeclient
  public createCommandeClient(commandeClient: CommandeClient): Observable<CommandeClient> {
    return this.http.post<CommandeClient>(this.apiUrl + '/commandeClients', commandeClient);
  }  

  // HttpCommandeClient API put() method => Update commandeclient
  public updateCommandeClient(id: number, commandeClient: CommandeClient): Observable<CommandeClient> {
    return this.http.put<CommandeClient>(this.apiUrl + '/commandeClients/' + id, commandeClient);
    
  }

  // HttpCommandeClient API delete() method => Delete commandeclient
  public deleteCommandeClientById(id: number){
    return this.http.delete<CommandeClient>(this.apiUrl + '/commandeClients/' + id)
    
  }

  
}
