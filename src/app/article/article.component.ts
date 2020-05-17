import { Article } from './../model/article.model';
import { Router } from '@angular/router';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  public articles: Article[];

  constructor(public artService: ArticleService, public router: Router) { }

  ngOnInit() {
    this.loadArticles();
  }

  

  // Afficher la liste des produits
  loadArticles(){
    this.artService.getArticles()
       .subscribe(data =>  {
        this.articles = data;
       }, err=> {
         console.log(err);
 
       })
   }

 
  onEditArticle(art) {

  }

  onDeleteArticle(art) {
    
  }


}
