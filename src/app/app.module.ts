import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantenteteComponent } from './composantentete/composantentete.component';
import { ComposantbarregaucheComponent } from './composantbarregauche/composantbarregauche.component';
import { ComposantpiedpageComponent } from './composantpiedpage/composantpiedpage.component';
import { DashboardFinanceComponent } from './dashboard-finance/dashboard-finance.component';
import { InfluencerProfileComponent } from './influencer-profile/influencer-profile.component';
import { ComposantpereComponent } from './composantpere/composantpere.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscripInterceptor } from './intercepteur/inscrip.interceptor';
import { VillesComponent } from './villes/villes.component';


@NgModule({
  declarations: [
    AppComponent,
    ComposantenteteComponent,
    ComposantbarregaucheComponent,
    ComposantpiedpageComponent,
    DashboardFinanceComponent,
    InfluencerProfileComponent,
    ComposantpereComponent,
    ConnexionComponent,
    InscriptionComponent,
    VillesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InscripInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
