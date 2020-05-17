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

  addCategorie(dataCategorie: Categorie) {
    this.catService.createCategorie(dataCategorie).subscribe((data: {}) => {
      this.router.navigate(['/categorie-list'])
    })
  }

  onEditCat(cat) {

  }

  onDeleteCat(cat) {
    
  }

}
