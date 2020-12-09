import { Injectable } from '@angular/core';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgenceService {
  listArticle:Article[];
  constructor() { }
 // getList(){
  //  this.listArticle=[
   //   {id:1,piece:'carbilateur',marque:'BMW',etat:'bon état',prix:120,favoris:false,achat:false,like:0,dislike:0,description:"aaaaaaaaaaaa"},
   //   {id:2,piece:'parachoque',marque:'Marcadez',etat:'Moyenne état',prix:26,favoris:false,achat:false,like:0,dislike:0,description:"aaaaaaaaaaaa"},
   //   {id:3,piece:'rout',marque:'Clio',etat:'Moyenne état',prix:263,favoris:false,achat:false,like:0,dislike:0,description:"aaaaaaaaaaaa"},
   //   {id:4,piece:'fnare',marque:'Megan',etat:'bon état',prix:145,favoris:true,achat:false,like:0,dislike:0,description:"aaaaaaaaaaaa"}
   // ]
  //  return this.listArticle;
  //}
}
