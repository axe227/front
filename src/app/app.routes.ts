import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';

import { ClientComponent } from './client/client.component';
import { RechercherVignetteComponent } from './rechercher-vignette/rechercher-vignette.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CreateAdminComponent } from './create-admin/creat-admi.component'; // corrigé (chrinore)
import { ExternalRedirectComponent } from './external-redirect.component'; // corrigé (chrinore)

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'creat-admin', component: CreateAdminComponent }, // corrigé (chrinore)

  { path: 'rechercher-vignette', component: RechercherVignetteComponent },
  { path: 'DashboardComponent', component: DashboardComponent }, // corrigé (chrinore)
  {
    path: 'admin',
    component: CreateAdminComponent,
    canActivate: [authGuard],
    // children: [{ path: 'google', component: ExternalRedirectComponent }], corrigé (chrinore)
  },
  { path: '**', redirectTo: 'DashboardComponent' },
];
