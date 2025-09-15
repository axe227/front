import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VignetteService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // ✅ base de l'API

  constructor(private http: HttpClient) { }

  // Méthode pour rechercher une vignette par immatriculation
  searchByImmatriculation(immatriculation: string): Observable<any> {
    const url = `${this.apiUrl}/vignettes/${immatriculation}`;
    return this.http.get(url);
  }

  deleteVignette(id: number): Observable<any> {
    const url = `${this.apiUrl}/vignettes/${id}`;
    return this.http.delete(url);
  }

  // ✅ Admin endpoints
  getAdminVignettes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/vignettes`);
  }

  createVignette(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/vignettes`, payload);
  }

  updateVignette(id: number, payload: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/admin/vignettes/${id}`, payload);
  }

  getAdminStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/stats`);
  }
}
