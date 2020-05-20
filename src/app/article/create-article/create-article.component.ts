import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { Categorie } from 'src/app/model/categorie.model';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  public currentArticle: Article = new Article();
  public article = new Article();
  public mode: number = 0;
  public idCat; number;
  public categories: Categorie[];

  constructor(private artService: ArticleService, private catService: CategorieService, private router: Router) { }

  ngOnInit() {
  }

  geAllCategorie() {

  }



  saveArticle(art: Article) {
    this.mode = 0;
    this.artService.createArticle(art).subscribe(
      (result: Article) => {
        console.log(art);
        if (result.idArticle) {
          this.router.navigateByUrl("article-list");
        }

      },
      error=> {
       // console.log(error);
      }
    );
  }

  uptdateArticle(art: Article) {

  }

}
