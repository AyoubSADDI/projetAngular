import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsArticleComponent } from './details-article/details-article.component';
import { FavorisComponent } from './favoris/favoris.component';
import { AchatComponent } from './achat/achat.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { ListearticleFilsComponent } from './listearticle-fils/listearticle-fils.component';
import { ListearticleParentComponent } from './listearticle-parent/listearticle-parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AjouterAnnonceComponent,
    ListeAnnonceComponent,
    ReservationComponent,
    AnnonceComponent,
    ContactComponent,
    DetailsArticleComponent,
    FavorisComponent,
    AchatComponent,
    AccueilComponent,

    WeatherWidgetComponent,

    ListearticleFilsComponent,

    ListearticleParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
