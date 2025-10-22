import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // base API

  constructor(private http: HttpClient) {}

  // Créer un admin
  addAdmin(admin: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/createUser`, admin);
  }

  // Récupérer tous les admins
  getAdmins(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin`);
  }

  // Récupérer un admin par ID
  getAdminById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/${id}`);
  }

  // Modifier un admin
  updateAdmin(id: number, admin: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/updateUser/${id}`, admin);
  }

  // Supprimer un admin
  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/deleteUser/${id}`);
  }
}