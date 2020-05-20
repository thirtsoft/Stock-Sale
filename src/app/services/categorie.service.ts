import { Categorie } from './../model/categorie.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl + "/categories");

  }

  public getCategorieById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.apiUrl + '/categories/' + id);
  }  

  // HttpClient API post() method => Create categorie
  public createCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiUrl + '/categories', categorie);
  }  

  // HttpClient API put() method => Update categorie
  public updateCategorie(id: number, categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(this.apiUrl + '/categories/' + id, categorie);
    
  }

  // HttpClient API delete() method => Delete categorie
  public deleteCategorieById(id: number){
    return this.http.delete<Categorie>(this.apiUrl + '/categories/' + id)
    
  }

}
