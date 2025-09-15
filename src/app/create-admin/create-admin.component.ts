import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent {
  adminData = {
    name: '',
    email: '',
    password: '',
    role:'SuperAdmin',
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
      }
    });
  }
}
