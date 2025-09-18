import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VignetteService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Laravel API

  constructor(private http: HttpClient) {}

  // 🔎 Recherche par immatriculation
  searchByImmatriculation(immatriculation: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/vignettes/${immatriculation}`);
  }

  // 📋 Liste toutes les vignettes
  getVignettes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vignettes`);
  }

  // ➕ Créer une vignette
  createVignette(vignette: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/vignettes`, vignette);
  }

  // ✏️ Modifier une vignette
  updateVignette(id: number, vignette: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/vignettes/${id}`, vignette);
  }

  // 🗑️ Supprimer une vignette
  deleteVignette(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/vignettes/${id}`);
  }
}
