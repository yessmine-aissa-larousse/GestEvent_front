export class Evenement {
    id: number;
    titre: string;
    description: string;
    date: Date;
    heure: string; 
    lieu: string;
    categorie: string;
    type: string;
    capacity: number;
    image?: string; 
    archive: boolean;
  
    constructor(id: number,titre: string,description: string,date: Date,heure: string,lieu: string,categorie: string,type: string,capacity: number,image: string | null,archive: boolean) {
      this.id = id;
      this.titre = titre;
      this.description = description;
      this.date = date;
      this.heure = heure;
      this.lieu = lieu;
      this.categorie = categorie;
      this.type = type;
      this.capacity = capacity;
      this.image = image ?? undefined;
      this.archive = archive;
    }
  }
  