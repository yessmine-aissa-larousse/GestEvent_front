import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Registre } from '../../models/registre';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  inscriptions: Registre[] = [];  // Utilise le type Registre

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getInscriptions().subscribe(
      (data) => {
        this.inscriptions = data;  // Assigner les données au tableau
      },
      (error) => {
        console.error('Erreur lors de la récupération des inscriptions', error);
      }
    );
  }
    
}
