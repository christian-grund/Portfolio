import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  // Property, um den Text zu speichern
  landingPageText: string = 'Hello! I am Christian';

  // Funktion, um den Text zu aktualisieren
  updateText(newText: string) {
    this.landingPageText = newText;
  }
}
