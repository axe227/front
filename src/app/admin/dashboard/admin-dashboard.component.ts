import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VignetteService } from '../../services/vignette.service';
import { NavbarComponent } from '../../navbar/navbar.component'; // Vérifie le chemin

@Component({
  standalone: true,
  selector: 'app-admin-dashboard',
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="dashboard">
      <h2>Tableau de bord</h2>
      <div *ngIf="stats">
        <p>Total vignettes: {{stats.total}}</p>
        <p>Vignettes expirées: {{stats.expired}}</p>
        <p>Revenu: {{stats.revenue}}</p>
      </div>
    </div>
  `
})
export class AdminDashboardComponent {
  stats: any;

  constructor(private vignetteService: VignetteService) {
    this.vignetteService.getAdminStats().subscribe((res: any) => {
      this.stats = res;
    });
  }
}