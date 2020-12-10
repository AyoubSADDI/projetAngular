import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import { ServiceAgenceService } from '../services/service-agence.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  listarticle:Article[];
 @Input() ar:Article;
 @Input() prixInput:number;
 @Output() a=new EventEmitter<Article>();
 @Output() aa=new EventEmitter<Article>();
 @Output() aaa=new EventEmitter<Article>();
 @Output() aaaa=new EventEmitter<Article>();
 @Output() aaaaa=new EventEmitter<Article>();
 @Output() aaaaaa=new EventEmitter<Article>();

  constructor(private service:ServiceAgenceService,private serviceHttp:ArticleService) { }

  ngOnInit(): void {
    this.serviceHttp.getArtcle().subscribe((data: Article[])=>this.listarticle =data);
  }

  favoris(){

   //this.ar.favoris=true;
  // console.log(this.ar)
  this.aaaa.emit(this.ar);

  }
  achat(id:number){
    this.aaaaa.emit(this.ar);
  }
  aimer(){
    this.a.emit(this.ar);
  }
  aimerp(){
    this.aa.emit(this.ar);
  }
  Supprimer(){
  this.aaa.emit(this.ar);

 }
 update(){
  this.aaaaaa.emit(this.ar);

 }
}
