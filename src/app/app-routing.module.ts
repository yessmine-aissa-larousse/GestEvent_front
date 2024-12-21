import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AjouterEvenementComponent } from './components/ajouter-evenement/ajouter-evenement.component';
import { ListeEvenementComponent } from './components/liste-evenement/liste-evenement.component';
import { ModifierEvenementComponent } from './components/modifier-evenement/modifier-evenement.component';
import { RegistreComponent } from './components/registre/registre.component';
import { Home3Component } from './components/home3/home3.component';
const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home3', component: Home3Component },
  { path: 'ajouter-event', component: AjouterEvenementComponent },
  { path: 'liste-event', component: ListeEvenementComponent },
  { path: 'modifier-event/:id', component: ModifierEvenementComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'login', component: AuthComponent }
];
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
