import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8000';
  
  constructor(private http: HttpClient) {}
  getInscriptions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/registre/liste`);
  }
  archiver(id: number) {
    return this.http.put(`${this.apiUrl }/evenement/${id}/archive`, {});
  }

  getNonArchivedEvents() {
    return this.http.get<any[]>(`${this.apiUrl}/evenement/nonArchive`).pipe(
      tap(data => console.log('Événements non archivés:', data)) 
    );
  }


  createEvent(eventData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/evenement/add`, eventData);
  }
  
  updateEvent(eventId: number, eventData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/evenement/update/${eventId}`, eventData).pipe(
      tap(() => console.log(`Événement ${eventId} mis à jour avec:`, eventData)),
      catchError(error => {
        console.error(`Erreur lors de la mise à jour de l'événement ${eventId}:`, error);
        return throwError(() => error);
      })
    );
  }

  getEventById(eventId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/evenement/${eventId}`).pipe(
      tap(data => console.log(`Détails de l'événement ${eventId}:`, data)),
      catchError(error => {
        console.error(`Erreur lors de la récupération de l'événement ${eventId}:`, error);
        return throwError(() => error);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}); 
  }

  getFilteredEvents(text: string): Observable<any[]> {
    const params = new HttpParams().set('search', text); 
    return this.http.get<any[]>(`${this.apiUrl}/evenement/filtrer`, { params });
  }

  envoyerNotification(evenementId: number, message: string): Observable<any> {
    const url = `${this.apiUrl}/organisateur/envoyer-notification/${evenementId}`;
    return this.http.post(url, { message });
  }
  
  
 


}
