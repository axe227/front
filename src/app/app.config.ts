import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RechercherVignetteComponent } from './rechercher-vignette/rechercher-vignette.component';

export const appConfig = [
  provideRouter([
    { path: '', component: HomeComponent },
    { path: 'rechercher-vignette', component: RechercherVignetteComponent }
  ])
];
