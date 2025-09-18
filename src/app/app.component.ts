import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ], // ✅ Seul RouterOutlet suffit
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   template:  `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title =  'Application Vignette';
}

