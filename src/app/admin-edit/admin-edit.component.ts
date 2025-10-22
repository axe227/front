import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-admin-edit',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css'],
})
export class AdminEditComponent implements OnInit {
  adminData = {
    name: '',
    email: '',
    password: '',
    role: '',
  };

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.loadAdmin(id);
  }

  loadAdmin(id: number) {
    this.adminService.getAdminById(id).subscribe((data) => {
      this.adminData = data;
    });
  }

  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.adminService.updateAdmin(id, this.adminData).subscribe(() => {
      alert('✅ Admin modifié');
      this.router.navigate(['/admin-list']); // Rediriger vers la liste
    });
  }
}