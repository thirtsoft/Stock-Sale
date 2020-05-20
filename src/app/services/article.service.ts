import { Article } from './../model/article.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl + "/articles");

  }

  public getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(this.apiUrl + '/Aarticles/' + id);
  }

  // HttpArticle API post() method => Create employee
  public createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl + '/articles', article);
  }

  // HttpArticle API put() method => Update employee
  public updateArticle(id: number, article: Article): Observable<Article> {
    return this.http.put<Article>(this.apiUrl + '/articles/' + id, article);

  }

  // HttpArticle API delete() method => Delete employee
  public deleteArticleById(id: number){
    return this.http.delete<Article>(this.apiUrl + '/articles/' + id)

  }

}
