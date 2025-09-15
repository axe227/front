import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://127.0.0.1:8000/api/admin/createUser'; // base API

  constructor(private http: HttpClient) {}

  // Créer un admin
  addAdmin(admin: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/createUser`, admin);
// console.log(admin);
  }

  // Récupérer toutes les vignettes (publiques)
  getVignettes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vignettes`);
  }

  // Supprimer un admin (⚠️ à condition que tu aies bien une route deleteUser côté Laravel)
  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/deleteUser/${id}`);
  }
}
