import { Boutique } from './../model/boutique.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getBoutiques(): Observable<Boutique[]> {
    return this.http.get<Boutique[]>(this.apiUrl + "/boutiques");

  }

  public getBoutiqueById(id: number): Observable<Boutique> {
    return this.http.get<Boutique>(this.apiUrl + '/boutiques/' + id);
  }

  // HttpBoutique API post() method => Create employee
  public createBoutique(boutique: Boutique): Observable<Boutique> {
    return this.http.post<Boutique>(this.apiUrl + '/boutiques', boutique);
  }

  // HttpBoutique API put() method => Update employee
  public updateBoutique(id: number, boutique: Boutique): Observable<Boutique> {
    return this.http.put<Boutique>(this.apiUrl + '/boutiques/' + id, boutique);

  }

  // HttpBoutique API delete() method => Delete employee
  public deleteBoutiqueById(id: number){
    return this.http.delete<Boutique>(this.apiUrl + '/boutiques/' + id)

  }

}
