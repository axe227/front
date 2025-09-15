import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  template: `
  <div class="login-container">
    <h2>Connexion Admin</h2>
    <form (ngSubmit)="onSubmit()">
      <div><label>Email</label><input [(ngModel)]="email" name="email" /></div>
      <div><label>Mot de passe</label><input type="password" [(ngModel)]="password" name="password" /></div>
      <div><button type="submit">Se connecter</button></div>
    </form>
    <p *ngIf="error" style="color:red">{{error}}</p>
  </div>
  `
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  constructor(private auth: AuthService, private router: Router) {}
  onSubmit() {
    this.auth.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/admin/dashboard']),
      error: (err) => this.error = err?.error?.message || 'Erreur de connexion'
    });
  }
}
