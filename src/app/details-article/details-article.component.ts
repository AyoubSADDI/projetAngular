import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/article';
import { ArticleService } from '../services/article.service';
import { ServiceAgenceService } from '../services/service-agence.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.css']
})
export class DetailsArticleComponent implements OnInit {
ar:Article;
listArticle:Article[];


  constructor(private sr: ActivatedRoute , private service:ArticleService) { }

  ngOnInit(): void {
    console.log(this.sr.snapshot.params.id);
    this.service.searchArticle(this.sr.snapshot.params.id).subscribe((data: Article)=>{this.ar =data})
    console.log(this.ar);
  }

}
