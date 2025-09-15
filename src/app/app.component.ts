import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, ], // ✅ Seul RouterOutlet suffit
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   template: `
    <app-navbar></app-navbar>
    <div class="content">
      <h1>Bienvenue sur l'application</h1>
    </div>
  `,
  styles: [`
    .content {
      text-align: center;
      margin-top: 40px;
      font-family: Arial, sans-serif;
    }
  `]
})
export class AppComponent {
  title =  'Application Vignette';
}

