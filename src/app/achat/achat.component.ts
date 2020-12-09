import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import { ServiceAgenceService } from '../services/service-agence.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  a:number;
  listeArticle:Article[];

  constructor(private service:ArticleService) { }

  ngOnInit(): void {
    this.service.getArtcle().subscribe((data: Article[])=>this.listeArticle =data.filter(x=>x.achat));


    this.a=0;

  }


 Somme(){

  for (let o of this.listeArticle){

     this.a = +this.a + +o.prix;

  }
  console.log(this.a);
   return this.a;

}
supprimer(article:Article){
  article.achat=false;
  this.service.updateArticle(article.id,article).subscribe(()=>this.listeArticle = this.listeArticle.filter(a =>a.achat != false));

}
}
