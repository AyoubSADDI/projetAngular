import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
url='http://localhost:3000/articles/';
  constructor(private httpClient:HttpClient) { }

  getArtcle(){
    return this.httpClient.get<Article[]>('http://localhost:3000/articles');
  }
  deleteArticle(id:number){
    return this.httpClient.delete('http://localhost:3000/articles/'+id)
  }

  addArticle(a:Article){
    console.log(a);
    return this.httpClient.post(this.url,a);
  }
  updateArticle(id:number,a: Article){

    return this.httpClient.put('http://localhost:3000/articles/'+id,a);
  }
  updateArticle1(id:number,a: Article):Observable<Article>{

    return this.httpClient.put<Article>('http://localhost:3000/articles/'+id,a);
  }
  uploadImage(image: any){

    return this.httpClient.get('http://localhost:8085/ttt/rest/abb?image='+image
).subscribe((res)=>{
      console.log(res);
    });

  }
  searchArticle(id:number){
    return this.httpClient.get<Article>(this.url+id);
  }
}
