import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service'; // Chemin correct vers ClientService
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-client',
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {  
  clientData = {
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
  };

  constructor(private clientService: ClientService, private router: Router) {}

  onSubmit() {
    this.clientService.addClient(this.clientData).subscribe({
      next: (res) => {
        console.log('Client ajouté avec succès', res);
        alert('✅ Client ajouté');
        this.router.navigate(['/dashboard']); // Redirige vers le dashboard après ajout
      },
      error: (err) => {
        console.error('Erreur ajout client', err);
        alert('❌ Erreur ajout client');
      },
    });
  }

}
