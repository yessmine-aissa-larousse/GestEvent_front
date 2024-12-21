
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-modifier-evenement',
  templateUrl: './modifier-evenement.component.html',
  styleUrls: ['./modifier-evenement.component.css']
})
export class ModifierEvenementComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  editEventForm!: FormGroup;
  eventId: number | undefined;
  categories = ['Public', 'Privé'];
  types = ['Culture', 'Sport', 'Technologie', 'Musique', 'Formation'];
  

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.eventId = +id;
    } else {
      console.error("ID de l'événement manquant");
    }

    this.editEventForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      lieu: ['', Validators.required],
      categorie: ['', Validators.required],
      type: ['', Validators.required],
      capacity: [null, Validators.required],
      image: [null],
      //archived: [false] 
    });

    this.loadEventDetails();
  }

  loadEventDetails(): void {
    if (this.eventId !== undefined) {
      this.eventService.getEventById(this.eventId).subscribe(data => {
        this.editEventForm.patchValue({
          titre: data.titre,
          description: data.description,
          date: data.date,
          heure: data.heure,
          lieu: data.lieu,
          categorie: data.categorie,
          type: data.type,
          capacity: data.capacity,
          //archived: data.archived || false
        });
      });
    } else {
      console.error("L'ID de l'événement est indéfini.");
    }
  }

  updateEvent(): void {
    if (this.editEventForm && this.editEventForm.valid) {
      if (this.eventId !== undefined) {
        const formData = this.editEventForm.value;
        this.eventService.updateEvent(this.eventId, formData).subscribe(
          response => {
            console.log('Événement mis à jour avec succès', response);
            this.router.navigate(['/liste-event']);
          },
          error => {
            console.error('Erreur lors de la mise à jour de l\'événement', error);
          }
        );
      } else {
        console.error("L'ID de l'événement est indéfini.");
      }
    }
  }
}

