import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
 styleUrl : './navbar.component.css' ,
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  logout() {


    // Option 2 : si tu veux passer par ton AuthService
    this.auth.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
//  <nav class="admin-nav">
   //   <a routerLink="/admin/dashboard" routerLinkActive="active">Dashboard</a>
   //   <a routerLink="/admin/vignettes" routerLinkActive="active">Vignettes</a>
    //  <a (click)="logout()">Déconnexion</a>
    //</nav> 