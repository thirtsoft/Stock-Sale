import { Stock } from './../model/stock.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.apiUrl + "/stocks");

  }

  public getStockById(id: number): Observable<Stock> {
    return this.http.get<Stock>(this.apiUrl + '/stocks/' + id);
  }  

  // HttpStock  API post() method => Create Stock
  public createStock (stock: Stock ): Observable<Stock> {
    return this.http.post<Stock >(this.apiUrl + '/stocks', stock);
  }  

  // HttpStock  API put() method => Update Stock
  public updateStock (id: number, stock : Stock ): Observable<Stock> {
    return this.http.put<Stock >(this.apiUrl + '/stocks/' + id, stock );
    
  }

  // HttpStock  API delete() method => Delete Stock
  public deleteStockById(id: number){
    return this.http.delete<Stock >(this.apiUrl + '/stocks/' + id)
    
  }

}
