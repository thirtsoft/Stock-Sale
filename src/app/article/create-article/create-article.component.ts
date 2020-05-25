import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article.model';
import { Categorie } from 'src/app/model/categorie.model';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  public currentArticle: Article = new Article();
  public article = new Article();
  public mode: number = 0;
  public idArt: number;
  public categories: Categorie[];

  constructor(private artService: ArticleService, private catService: CategorieService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    /* this.idArt = this.route.snapshot.params['id'];
    this.artService.getArticleById(this.idArt).subscribe((data) => {
     this.currentArticle = data;
      }, error => {
      console.log(error);
    }); */

    this.geAllCategorie();
  }

  geAllCategorie() {
    this.catService.getCategorie().subscribe((data) => {
      this.categories = data;
    },
    error => {
      console.log(error);
    });

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
    this.artService.updateArticle(this.idArt, art).subscribe((data) => {
      this.article = data;
      this.router.navigateByUrl("article-list");
    }, error => {
      console.log(error);
    });

  }

  onGoToListArticle() {
    this.router.navigateByUrl("article-list");
  }

}
