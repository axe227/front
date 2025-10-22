import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  clientData = {
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
  };
  clientId: number = 0;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('id'));
    this.getClient();
  }

  getClient() {
    this.clientService.getClients().subscribe(clients => {
      const client = clients.find((c: { id: number }) => c.id === this.clientId);
      if (client) {
        this.clientData = client;
      }
    });
  }

  onSubmit() {
    this.clientService.updateClient(this.clientId, this.clientData).subscribe({
      next: () => {
        alert('✅ Client mis à jour avec succès');
        this.router.navigate(['/dashboard/clients']);
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du client', err);
        alert('❌ Erreur lors de la mise à jour du client');
      },
    });
  }
}