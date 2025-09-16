import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-admin', // corrigé (chrinore)
  imports: [CommonModule, FormsModule],
  templateUrl: './create-admin.component.html', // corrigé (chrinore)
  styleUrls: ['./create-admin.component.css'], // corrigé (chrinore)
})
export class CreateAdminComponent {
  // corrigé (chrinore)
  adminData = {
    name: '',
    email: '',
    password: '',
    role: '',
  };

  constructor(private adminService: AdminService) {}

  onSubmit() {
    this.adminService.addAdmin(this.adminData).subscribe({
      next: (res) => {
        console.log('Admin ajouté avec succès', res);
        alert('✅ Admin ajouté');
      },
      error: (err) => {
        console.error('Erreur ajout admin', err);
        alert('❌ Erreur ajout admin');
      },
    });
  }
}
