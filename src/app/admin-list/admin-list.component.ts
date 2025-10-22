import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
})
export class AdminListComponent implements OnInit {
  admins: any[] = []; // Liste des admins

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins() {
    this.adminService.getAdmins().subscribe((data) => {
      this.admins = data;
       console.log(data);
    });
  }

  deleteAdmin(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet admin ?')) {
      this.adminService.deleteAdmin(id).subscribe(() => {
        this.loadAdmins(); // Recharger la liste après suppression
      });
    }
  }

  editAdmin(id: number) {
    // Rediriger vers le composant d'édition (il faudra gérer cela avec le routeur)
  }
}
