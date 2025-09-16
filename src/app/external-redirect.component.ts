import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-redirect',
  template: '',
})
export class ExternalRedirectComponent {
  constructor(private router: Router) {
    window.location.href = 'https://www.google.com';
  }
}
// chrinore : composant de redirection externe vers Google
