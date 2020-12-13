import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-listearticle-fils',
  templateUrl: './listearticle-fils.component.html',
  styleUrls: ['./listearticle-fils.component.css']
})
export class ListearticleFilsComponent implements OnInit {
  listarticle:Article[];
  closeResult = '';
  @Input() ar:Article;
  @Input() prixInput:number;
  @Output() aaa=new EventEmitter<Article>();
  @Output() aaaaaa=new EventEmitter<Article>();


  constructor(private serviceHttp:ArticleService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.serviceHttp.getArtcle().subscribe((data: Article[])=>this.listarticle =data);
  }
  Supprimer(){
    this.aaa.emit(this.ar);

   }
   update(){
    this.aaaaaa.emit(this.ar);

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
