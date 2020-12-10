import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AchatComponent } from './achat/achat.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { ReservationComponent } from './reservation/reservation.component';



const ROUTES : Routes = [
  {path: '',redirectTo:'/Accueil', pathMatch:'full'},
  {path:'contact',component: ContactComponent},
  {path:'acc',component: ListeAnnonceComponent},
  {path:'Accueil',component: AccueilComponent},
  {path:'ajouter',component: ListeAnnonceComponent},
  {path:'favoris',component: FavorisComponent},
  {path:'pannier',component: AchatComponent},
  {path:'ajouter/description/:id',component: DetailsArticleComponent},
  {path:'**',component: ReservationComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
