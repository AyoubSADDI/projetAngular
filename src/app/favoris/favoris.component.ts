import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import { ServiceAgenceService } from '../services/service-agence.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  listFavorisArticle: Article[]

  constructor(private serviceHttp:ArticleService) { }

  ngOnInit(): void {

  this.serviceHttp.getArtcle().subscribe((data: Article[])=>this.listFavorisArticle =data.filter(x=>x.favoris));

  }

  supprimer(article:Article){
    article.favoris=false;
    this.serviceHttp.updateArticle(article.id,article).subscribe(()=>this.listFavorisArticle = this.listFavorisArticle.filter(a =>a.favoris != false));

  }
  panier(article:Article){
    this.listFavorisArticle.filter(x=>x.id==article.id)[0].achat=true;
    article.achat=true;
    this.serviceHttp.updateArticle(article.id,article).subscribe(()=> this.listFavorisArticle);
    console.log(article.achat);
    console.log(this.listFavorisArticle);

  }

}
