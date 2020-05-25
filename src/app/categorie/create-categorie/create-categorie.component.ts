import { Router, ActivatedRoute } from '@angular/router';
import { CategorieService } from './../../services/categorie.service';
import { Categorie } from './../../model/categorie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.scss']
})
export class CreateCategorieComponent implements OnInit {

  public currentCategorie: Categorie = new Categorie();
  public categorie = new Categorie();
  public mode: number = 0;
  public idCat; number;

  constructor(private catService: CategorieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.idCat = this.route.snapshot.params['id'];
    // this.catService.getCategorieById(this.idCat)
    //   .subscribe(data => {
    //     this.currentCategorie = data;
    //   },err=> {
    //     console.log(err);
    //   });
  }

  saveCategorie(cat: Categorie) {
    this.mode = 0;
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

  uptdateCategorie(cat: Categorie) {
    this.mode = 1;
    this.catService.updateCategorie(this.idCat, cat).subscribe(data => {
      this.currentCategorie = data;
      this.router.navigateByUrl("categorie-list");
    }, error => {
      console.log(error);
    });
  }

  onGoToListCategorie() {
    this.router.navigateByUrl("categorie-list");
  }

}
