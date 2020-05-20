import { CategorieService } from './../services/categorie.service';
import { Categorie } from './../model/categorie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  public categories: Categorie[];

  constructor(public catService: CategorieService, public router: Router) { }

  ngOnInit() {
    this.loadCategories();
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
