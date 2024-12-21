import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  mail: string = '';
  motdepasse: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = { mail: this.mail, motdepasse: this.motdepasse };

    this.authService.login(credentials).subscribe(
      (response) => {
        const role = response?.role; // Récupération du rôle de l'utilisateur
        if (role === 'admin') {
          this.router.navigate(['/home']);
        } else if (role === 'organisateur') {
          this.router.navigate(['/home']);
        } else if (role === 'participant') {
          this.router.navigate(['/home3']);
        } else {
          this.errorMessage = 'Rôle utilisateur inconnu.';
        }
      },
      (error) => {
        this.errorMessage = 'Connexion échouée. Vérifiez vos identifiants.';
      }
    );
  }
}
