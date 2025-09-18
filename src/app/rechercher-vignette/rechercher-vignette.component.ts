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
   // Pour création
  showCreateForm: boolean = false;
  newVignette: any = {
    nom_prenom: '',
    immatriculation: '',
    numero_quittance: '',
    date_vente: '',
    montant: '',
    serie: '',
    date_expiration: '',
    taxe: ''
  };

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

   // 🆕 Formulaire
  openCreateForm() {
    this.showCreateForm = true;
  }
  closeCreateForm() {
    this.showCreateForm = false;
  }

  // ➕ Créer vignette
  createVignette() {
    this.vignetteService.createVignette(this.newVignette).subscribe(
      (response: any) => {
        console.log('Vignette créée:', response);
        this.vignettes.push(response.data);
        this.closeCreateForm();
        this.newVignette = {}; // reset
      },
      (error: any) => {
        console.error('Erreur création:', error);
      }
    );
  }

  // ✏️ Modifier
  editVignette(vignette: any) {
    console.log('Modifier:', vignette);
  }

  // 🗑️ Supprimer
  deleteVignette(vignette: any) {
    this.vignetteService.deleteVignette(vignette.id).subscribe(() => {
      this.vignettes = this.vignettes.filter(v => v.id !== vignette.id);
    });
  }
}