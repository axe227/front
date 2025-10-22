import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth/auth.guard';
import { ClientComponent } from './client/client.component';
import { RechercherVignetteComponent } from './rechercher-vignette/rechercher-vignette.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAdminComponent } from './create-admin/creat-admi.component';
import { ExternalRedirectComponent } from './external-redirect.component';
import { ClientListComponent } from './client-list/client-list.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminListComponent } from './admin-list/admin-list.component';

// ⚠️ Les pages internes au dashboard sont déclarées en "children"
export const routes: Routes = [
  { path: 'login', component: LoginComponent },

 { path: 'home', component: HomeComponent },
   { path: 'admins', component: CreateAdminComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard], // optionnel : protéger l’accès
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'admins', component: CreateAdminComponent },
        { path: 'admin-list', component: AdminListComponent },
          { path: 'admin-edit/:id', component: AdminEditComponent },
      { path: 'clients', component: ClientComponent },
       { path: 'clientList', component: ClientListComponent },
      { path: 'clients/edit/:id', component: EditClientComponent },
        { path: 'rechercher-vignette', component: RechercherVignetteComponent },
      { path: 'stats', component: ExternalRedirectComponent }, // à remplacer par ton vrai composant stats
      { path: 'products', component: ExternalRedirectComponent }, // idem pour produits
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // défaut = home
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
