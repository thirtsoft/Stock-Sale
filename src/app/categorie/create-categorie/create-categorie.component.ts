import { Router } from '@angular/router';
import { CategorieService } from './../../services/categorie.service';
import { Categorie } from './../../model/categorie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.scss']
})
export class CreateCategorieComponent implements OnInit {
  public codeCategorie: string;
  public categoriename: string;
  public isNoResult: boolean = true;
  public isFormSubmitted: boolean = false;
  public titleSaveOrUpdate: string = 'Add New Categorie Form';
  public message: string = "Save done";
  public categorie = new Categorie();

  constructor(private catService: CategorieService, private router: Router) { }

  ngOnInit() {
  }

  saveCategorie(cat: Categorie) {
    this.catService.createCategorie(cat).subscribe(
      (result: Categorie) => {
        console.log(cat);
        if (result.idCategorie) {
          this.router.navigateByUrl("categorie-list");
        }
       
      },
      error=> {
       // console.log(error);
      }
    );
  }

}
