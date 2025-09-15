import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VignetteService } from '../services/vignette.service';

@Component({
  standalone: true,
  selector: 'app-rechercher-vignette',
  templateUrl: './rechercher-vignette.component.html',
  styleUrls: ['./rechercher-vignette.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class RechercherVignetteComponent {
  immatriculation: string = '';
  vignettes: any[] = []; // Vérifie que cette propriété est bien définie

  constructor(private vignetteService: VignetteService) {}

 search() {
  this.vignetteService.searchByImmatriculation(this.immatriculation).subscribe(
    (response: any) => {
      console.log('Réponse API:', response); // Debug
      this.vignettes = Array.isArray(response) ? response : [response];
    },
    (error: any) => {
      console.error('Erreur lors de la recherche de la vignette:', error);
      this.vignettes = [];
    }
  );
}

  editVignette(vignette: any) {
    console.log('Modifier:', vignette);
  }

  deleteVignette(vignette: any) {
    this.vignetteService.deleteVignette(vignette.id).subscribe(
      () => {
        console.log('Vignette supprimée avec succès');
        this.vignettes = this.vignettes.filter(v => v.id !== vignette.id); // Mettre à jour la liste après suppression
      },
      (error: any) => {
        console.error('Erreur lors de la suppression de la vignette:', error);
      }
    );
  }
}