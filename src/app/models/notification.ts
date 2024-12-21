export class Notification {
    id: number;
    expediteur_id: number; // Clé étrangère vers `Utilisateur`
    destinataire_id: number; // Clé étrangère vers `Utilisateur`
    evenement_id: number; // Clé étrangère vers `Evenement`
    message: string;
    date_envoi: Date;
  
    constructor(id: number,expediteur_id: number,destinataire_id: number,evenement_id: number,message: string,date_envoi: Date) {
      this.id = id;
      this.expediteur_id = expediteur_id;
      this.destinataire_id = destinataire_id;
      this.evenement_id = evenement_id;
      this.message = message;
      this.date_envoi = date_envoi;
    }
  }
  