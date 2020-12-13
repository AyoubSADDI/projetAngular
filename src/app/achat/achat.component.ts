import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from '../model/article';
import { ArticleService } from '../shared/article.service';


@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  a:number;
  b:number;
  listeArticle:Article[];
  closeResult: string;

  constructor(private service:ArticleService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getArtcle().subscribe((data: Article[])=>this.listeArticle =data.filter(x=>x.achat));


    this.a=0;
    this.b=0;

  }


 Somme(){

  for (let o of this.listeArticle){

     this.a = +this.a + +o.prix;

  }

   return this.a;

}
SommeLiv(){

  for (let x of this.listeArticle){

     this.b = +this.b + +x.prix + +7;

  }

   return this.b;

}
supprimer(article:Article){
  article.achat=false;
  this.service.updateArticle(article.id,article).subscribe(()=>this.listeArticle = this.listeArticle.filter(a =>a.achat != false));

}
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
}
