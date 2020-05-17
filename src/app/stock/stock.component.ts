import { Router } from '@angular/router';
import { StockService } from './../services/stock.service';
import { Stock } from './../model/stock.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  public stocks: Stock[];

  constructor(public stockService: StockService, public router: Router) { }

  ngOnInit() {
    this.loadStocks();
  }

  // Get employees list
  loadStocks() {
    this.stockService.getStocks().subscribe((data) => {
      this.stocks = data;
    });

  }

 
  onEditStock(stock) {

  }

  onDeleteStock(stock) {
    
  }


}
