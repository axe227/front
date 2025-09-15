import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { RechercherVignetteComponent } from './rechercher-vignette/rechercher-vignette.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { AdminDashboardComponent } from './admin/dashboard/admin-dashboard.component';// ✅ prends bien celui dans /admin/dashboard
import { CreateAdminComponent } from './create-admin/create-admin.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientComponent },
  { path: 'home', component: HomeComponent },
 { path: 'dashboard', component: DashboardComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
    { path: 'creat-admin', component:  CreateAdminComponent },

           { path: 'rechercher-vignette', component: RechercherVignetteComponent },
  {
    path: 'admin',
    component: AdminComponent,      // ✅ ton layout admin
    canActivate: [authGuard],       // ✅ appel cohérent
    children: [
    // ✅ plus besoin de répéter "admin/"
   
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // ✅ redirection propre
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
