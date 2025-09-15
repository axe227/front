import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<{token:string, admin:any}>(`${this.base}/admin/login`, {email, password})
      .pipe(tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('admin', JSON.stringify(res.admin));
      }));
  }

  logout(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      localStorage.removeItem('token'); localStorage.removeItem('admin'); this.router.navigate(['/login']);
      return of(null);
    }
    return this.http.post(`${this.base}/admin/logout`, {}, { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) })
      .pipe(tap(()=> {
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
        this.router.navigate(['/login']);
      }));
  }

  getToken(): string | null { return localStorage.getItem('token'); }
  isLoggedIn(): boolean { return !!this.getToken(); }
  getAdmin() { return JSON.parse(localStorage.getItem('admin') || 'null'); }
}
