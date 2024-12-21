export class Registre {
  id: number;
  utilisateur: string; // Nom de l'utilisateur
  evenement: string;   // Titre de l'événement
  dateInscription: string; // Date d'inscription

  constructor(
    id: number,
    utilisateur: string,
    evenement: string,
    dateInscription: string
  ) {
    this.id = id;
    this.utilisateur = utilisateur;
    this.evenement = evenement;
    this.dateInscription = dateInscription;
  }
}
