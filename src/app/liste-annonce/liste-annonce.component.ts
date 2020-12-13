import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {
  listarticle:Article[];
  art:Article;
  artic:Article;
  var:boolean;
  test:boolean;
  budget:number;
  piece:string;
  marque:string;

  //@Output() aa=new EventEmitter<Article>();

  constructor(private serviceHttp:ArticleService) { }

  ngOnInit(): void {
    this.serviceHttp.getArtcle().subscribe((data: Article[])=>{this.listarticle =data;
    console.log(" aaaa"+this.listarticle);
    this.art=new Article();
    this.var=false;
    });

  }
  save(a:Article){

    this.listarticle.push(a);
    this.serviceHttp.addArticle(a).subscribe(()=>this.listarticle);

  }
  like (article:Article)
  {
    if(article.like==0){
      article.dislike=0;
    article.like==article.like++;
  this.serviceHttp.updateArticle(article.id,article).subscribe(()=> this.listarticle);
  console.log(article.like);
  console.log(this.listarticle);
}
    //let i=this.listarticle.indexOf(article);
   // this.listarticle[i].like++;
  }

dislike(article:Article){
  if(article.dislike==0){
    article.like=0;
    article.dislike==article.dislike++;
  this.serviceHttp.updateArticle(article.id,article).subscribe(()=> this.listarticle);
  console.log(article.dislike);
  console.log(this.listarticle);
}
}

  Supprimer(articl:Article){
  this.serviceHttp.deleteArticle(articl.id).subscribe(()=> this.listarticle = this.listarticle.filter(artic =>artic.id != articl.id));
}
favoris(article:Article){
  this.listarticle.filter(x=>x.id==article.id)[0].favoris=true;
  article.favoris=true;
  this.serviceHttp.updateArticle(article.id,article).subscribe(()=> this.listarticle);
  console.log(article.favoris);
  console.log(this.listarticle);
 // for (let o of this.listarticle){
 //   if(o.id==article.id){
   //   o.favoris=true;
 //console.log(article);

//}
//}
//console.log(this.listarticle);
//}
}
achat(article:Article){
  this.listarticle.filter(x=>x.id==article.id)[0].achat=true;
  article.achat=true;
  this.serviceHttp.updateArticle(article.id,article).subscribe(()=> this.listarticle);
  console.log(article.achat);
  console.log(this.listarticle);
}
update(a:Article){
this.artic=a;
this.test=true;


}
afficher (){
  this.var=true
}
updateAjour(a: Article){
this.listarticle.filter(x=>x.id==a.id)[0].prix=a.prix;
this.listarticle.filter(x=>x.id==a.id)[0].description=a.description;
this.listarticle.filter(x=>x.id==a.id)[0].etat=a.etat;
this.listarticle.filter(x=>x.id==a.id)[0].marque=a.marque;
this.listarticle.filter(x=>x.id==a.id)[0].piece=a.piece;
this.listarticle.filter(x=>x.id==a.id)[0].image=a.image;


console.log("aaaaaa");
}
search(){
this.listarticle=this.listarticle.filter(x=>x.prix==this.budget||x.piece==this.piece||x.marque==this.marque);
}
}
