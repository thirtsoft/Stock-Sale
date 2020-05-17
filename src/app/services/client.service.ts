import { Client } from './../model/client.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl + "/clients");

  }

  public getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(this.apiUrl + '/clients/' + id);
  }  

  // HttpClient API post() method => Create employee
  public createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl + '/clients', client);
  }  

  // HttpClient API put() method => Update employee
  public updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(this.apiUrl + '/clients/' + id, client);
    
  }

  // HttpClient API delete() method => Delete employee
  public deleteClientById(id: number){
    return this.http.delete<Client>(this.apiUrl + '/clients/' + id)
    
  }

  
}
