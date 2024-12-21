import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
@Component({
  selector: 'app-liste-evenement',
  templateUrl: './liste-evenement.component.html',
  styleUrls: ['./liste-evenement.component.css']
})
export class ListeEvenementComponent {
  events: any[] = [];
  eventsFiltrer: any[] = []; // Liste filtrée
  textDeRecherche: string = '';
  

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getNonArchivedEvents().subscribe(
      data => {
        console.log('Données récupérées:', data);
        this.events = data;
        this.eventsFiltrer = data;
      },
      error => {
        console.error('Erreur lors de la récupération des événements :', error);
      }
    );
  }
  

  archiver(id: number): void {
    this.eventService.archiver(id).subscribe(() => {
      this.events = this.events.filter(event => event.id !== id);
      this.filterEvents();
    }, (error) => {
      console.error('Erreur lors de l\'archivage :', error);
    });
  }

  filterEvents(): void {
    const query = this.textDeRecherche.trim();
    if (query) {
      this.eventService.getFilteredEvents(query).subscribe(
        (data) => {
          console.log('Données filtrées reçues :', data); 
          this.eventsFiltrer = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des événements filtrés :', error);
          alert('Une erreur s\'est produite. Veuillez réessayer.');
        }
      );
    } else {
      this.eventsFiltrer = [...this.events]; 
    }
  }
  


}
