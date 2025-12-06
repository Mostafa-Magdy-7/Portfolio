import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Front } from './front/front';
import { E } from './e/e';
import { Nav } from './nav/nav';
import { Projects } from './projects/projects';
import { Email } from './email/email';
import { Skills } from './skills/skills';
import { Stats } from './stats/stats';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Front, E,Nav,Projects,Skills,Stats,Footer],
  template: `
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz@0,14..32;1,14..32&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <app-nav></app-nav>
  <div class="container">
  <app-front></app-front>
  <app-stats></app-stats>
  <app-projects></app-projects>
  <app-skills></app-skills>
  <app-e></app-e>
  <app-footer></app-footer>
    
  </div>
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Portfolio');
}
