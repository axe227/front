import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des clients', err);
      }
    });
  }

  editClient(id: number) {
    this.router.navigate([`/dashboard/clients/edit/${id}`]);
  }

  deleteClient(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      this.clientService.deleteClient(id).subscribe({
        next: () => {
          alert('Client supprimé avec succès');
          this.getClients(); // Récupérer à nouveau la liste après suppression
        },
        error: (err) => {
          console.error('Erreur lors de la suppression du client', err);
          alert('❌ Erreur lors de la suppression du client');
        }
      });
    }
  }
}
