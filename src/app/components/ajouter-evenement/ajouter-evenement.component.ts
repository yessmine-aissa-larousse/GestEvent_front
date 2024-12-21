import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-evenement',
  templateUrl: './ajouter-evenement.component.html',
  styleUrls: ['./ajouter-evenement.component.css']
})
export class AjouterEvenementComponent {
  eventForm!: FormGroup;
  categories = ['Public', 'Privé'];
  types = ['Culture', 'Sport', 'Technologie', 'Musique', 'Formation'];

  constructor(private fb: FormBuilder, private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      titre: ['', Validators.required, Validators.minLength(3)],
      description: ['', Validators.required],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      lieu: ['', Validators.required],
      categorie: ['', Validators.required],
      type: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1),, Validators.pattern('^[0-9]*$')]],
      image: [''],
      archive: ['false']
    });
  }


  onSubmit(): void {
    if (this.eventForm.invalid) {
      return;
    }
    const formData = this.eventForm.value;
    this.eventService.createEvent(formData).subscribe(
      (response) => {
        console.log('Événement ajouté avec succès:', response);
        this.router.navigate(['/liste-event']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'événement:', error);
      }
    );
  }

 
}
