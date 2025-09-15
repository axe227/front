// src/app/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Exemple simple : vérifier si un "token" existe dans le localStorage
  const isLoggedIn = !!localStorage.getItem('token');

  if (!isLoggedIn) {
    // si pas connecté → redirige vers /login
    router.navigate(['/login']);
    return false;
  }
  return true; // accès autorisé
};
