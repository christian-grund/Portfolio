import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  circles = [1, 2, 3, 4, 5, 6];
  projects = [
    {
      mockup: 'join.png',
      name: 'Join',
      projectLanguage: 'JavaScript | HTML | CSS',
      description: 'joinDescription',
      link: 'JOIN',
      liveTest: 'https://join.christian-grund.dev',
      translatedDescription: '',
    },
    {
      mockup: 'pollo_loco.png',
      name: 'Pollo Loco',
      projectLanguage: 'JavaScript | HTML | CSS',
      description: 'polloLocoDescription',
      link: 'El-Pollo-Loco',
      liveTest: 'https://polloloco.christian-grund.dev',
      translatedDescription: '',
    },
    {
      mockup: 'pokedex.png',
      name: 'Pokédex',
      projectLanguage: 'JavaScript | HTML | CSS | Api',
      description: 'pokedexDescription',
      link: 'Pokedex',
      liveTest: 'https://pokedex.christian-grund.dev',
      translatedDescription: '',
    },
  ];

  constructor(private translateService: TranslateService) {
    this.translateProjectDescriptions();
  }

  translateProjectDescriptions(): void {
    for (const project of this.projects) {
      this.translateService
        .get(project.description)
        .subscribe((translatedDesc: string) => {
          project.translatedDescription = translatedDesc;
        });
    }
  }
}
