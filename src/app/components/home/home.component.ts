import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalParticipants: number = 0;
  totalEvents: number = 0;
  totalOrganizers: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDashboardStats();
  }

  getDashboardStats(): void {
    this.http.get<any>('http://localhost:8000/dashboard')
      .subscribe(response => {
        this.totalParticipants = response.totalParticipants;
        this.totalEvents = response.totalEvents;
        this.totalOrganizers = response.totalOrganizers;
      }, error => {
        console.error('Error fetching dashboard stats', error);
      });
  }
}
