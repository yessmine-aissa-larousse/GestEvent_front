import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  login(credentials: { mail: string; motdepasse: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }
}
