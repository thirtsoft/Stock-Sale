import { CategorieService } from './../services/categorie.service';
import { Categorie } from './../model/categorie.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
//declare var $: any;


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};

  public categories: Categorie[];

  dtTrigger: Subject<any> = new Subject();

  constructor(public catService: CategorieService, public router: Router) { }

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
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  // Get employees list
  loadCategories() {
    this.catService.getCategorie().subscribe((data) => {
      this.categories = data;
    });

  }


  onEditCat(cat: Categorie) {
    this.router.navigate(['/edit-categorie/'+cat.idCategorie]);
  }

  onDeleteCat(cat: Categorie) {
    let conf = confirm("Etes vous sur de vouloir supprimer");
    if(!conf) return;
    this.catService.deleteCategorieById(cat.idCategorie).subscribe((data) => {
      this.loadCategories();
    }, error => {
      console.log(error);
    });

  }

  onCreateCategorie() {
    // this.mode='new-cat';
    this.router.navigate(['/create-categorie']);
   }

}
