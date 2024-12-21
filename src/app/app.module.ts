import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ListeEvenementComponent } from './components/liste-evenement/liste-evenement.component';
import { AjouterEvenementComponent } from './components/ajouter-evenement/ajouter-evenement.component';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { HomeComponent } from './components/home/home.component';
import { ModifierEvenementComponent } from './components/modifier-evenement/modifier-evenement.component';
import { RouterModule } from '@angular/router';
import { Registre } from './models/registre';
import { RegistreComponent } from './components/registre/registre.component';
import { Home3Component } from './components/home3/home3.component';
import { Navbar3Component } from './components/navbar3/navbar3.component';
@NgModule({
  declarations: [
    AppComponent,
    ListeEvenementComponent,
    AjouterEvenementComponent,
    AuthComponent,
    NavbarComponent,
    HomeComponent,
    ModifierEvenementComponent,
    RegistreComponent,
    Home3Component,
    Navbar3Component
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
