import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  closeResult: string;

  constructor(private serviceHttp:ArticleService , private modalService: NgbModal) { }

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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open1(content1) {
    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
