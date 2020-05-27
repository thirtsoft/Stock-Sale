import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Categorie } from './model/categorie.model';
import { Router } from '@angular/router';
import { CategorieService } from './services/categorie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Stock-Sale';

 /*  @ViewChild('dataTable') table: ElementRef;
  dataTable: any;
  dtOption: any; */

  dtOptions: DataTables.Settings = {};

  public categories: Categorie[];

  dtTrigger: Subject<any> = new Subject();

  constructor(public catService: CategorieService, public router: Router){
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.catService.getCategorie().subscribe((data)  => {
      this.categories = data;
      this.dtTrigger.next();
    });

    /* this.loadCategories();
    this.dtTrigger.next(); */
   /*  this.dtOption = {
      "paging": true,
      "ordering": true,
      "info":     true
    }; */
   // this.dataTable = $(this.table.nativeElement);
    //this.dataTable.DataTable(this.dtOption);
  }

  // Get employees list
  loadCategories() {
    this.catService.getCategorie().subscribe((data) => {
      this.categories = data;
    });

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



}
