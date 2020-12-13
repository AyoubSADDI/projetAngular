import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-listearticle-parent',
  templateUrl: './listearticle-parent.component.html',
  styleUrls: ['./listearticle-parent.component.css']
})
export class ListearticleParentComponent implements OnInit {
  listarticle:Article[];
  art:Article;
  artic:Article;
  var:boolean;
  test:boolean;



  constructor(private serviceHttp:ArticleService) { }

  ngOnInit(): void {
    this.serviceHttp.getArtcle().subscribe((data: Article[])=>{this.listarticle =data;
      console.log(" aaaa"+this.listarticle);
      this.art=new Article();
      });
  }
  Supprimer(articl:Article){
    this.serviceHttp.deleteArticle(articl.id).subscribe(()=> this.listarticle = this.listarticle.filter(artic =>artic.id != articl.id));
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
    afficher (){
      this.var=true
    }
    save(a:Article){

      this.serviceHttp.addArticle(a).subscribe(()=>this.listarticle =[a, ...this.listarticle]);

    }
    update(a:Article){
      this.artic=a;
      this.test=true;


      }

}
