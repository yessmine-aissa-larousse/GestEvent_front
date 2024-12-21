export class Utilisateur {
    id: number;
    nom: string;
    mail: string;
    adresse: string;
    el: number; // Numéro de téléphone
    motdepasse: string;
    role: string;
  
    constructor(id: number,nom: string,mail: string,adresse: string,el: number,motdepasse: string,role: string) {
      this.id = id;
      this.nom = nom;
      this.mail = mail;
      this.adresse = adresse;
      this.el = el;
      this.motdepasse = motdepasse;
      this.role = role;
    }
  }
  