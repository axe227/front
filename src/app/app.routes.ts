import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';
import { ClientComponent } from './client/client.component';
import { RechercherVignetteComponent } from './rechercher-vignette/rechercher-vignette.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAdminComponent } from './create-admin/creat-admi.component';
import { ExternalRedirectComponent } from './external-redirect.component';

// ⚠️ Les pages internes au dashboard sont déclarées en "children"
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'rechercher-vignette', component: RechercherVignetteComponent },
 { path: 'home', component: HomeComponent },
 { path: 'clients', component: ClientComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard], // optionnel : protéger l’accès
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'admins', component: CreateAdminComponent },
      
      { path: 'stats', component: ExternalRedirectComponent }, // à remplacer par ton vrai composant stats
      { path: 'products', component: ExternalRedirectComponent }, // idem pour produits
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // défaut = home
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
