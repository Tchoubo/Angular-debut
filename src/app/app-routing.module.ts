import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposantpereComponent } from './composantpere/composantpere.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardFinanceComponent } from './dashboard-finance/dashboard-finance.component';
import { InfluencerProfileComponent } from './influencer-profile/influencer-profile.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { VillesComponent } from './villes/villes.component';

const routes: Routes = [
  {
    path: "", 
    component: ComposantpereComponent,
    children:[
      {
        path: "inscription",
        component: InscriptionComponent
      },
      {
        path: "connexion",
        component: ConnexionComponent
      },
      {
        path: "profile",
        component: InfluencerProfileComponent
      },
      
      {
        path: "finance",
        component: DashboardFinanceComponent
      },
      {
        path: "villes",
        component: VillesComponent
      }
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
