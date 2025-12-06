import { Component } from '@angular/core';

@Component({
  selector: 'app-front',
  imports: [],
  templateUrl: './front.html',
  styleUrl: './front.css',
})
export class Front {
scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
