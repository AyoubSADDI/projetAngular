import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-listearticle-fils',
  templateUrl: './listearticle-fils.component.html',
  styleUrls: ['./listearticle-fils.component.css']
})
export class ListearticleFilsComponent implements OnInit {

  constructor(private serviceHttp:ArticleService) { }

  ngOnInit(): void {
  }

}
