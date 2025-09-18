import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // base API Laravel

  constructor(private http: HttpClient) {}

  // Créer un client
  addClient(client: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients`, client);
  }

  // Récupérer tous les clients
  getClients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/clients`);
  }

  // Supprimer un client
  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clients/${id}`);
  }

  // Modifier un client
  updateClient(id: number, client: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/clients/${id}`, client);
  }
}
