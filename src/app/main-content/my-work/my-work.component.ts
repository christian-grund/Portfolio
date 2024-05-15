import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  circles = [1, 2, 3, 4, 5, 6, 7, 8];
  projects = [
    {
      mockup: 'join.png',
      name: 'Join',
      projectLanguage: 'JavaScript | HTML | CSS',
      description: 'joinDescription',
      link: 'JOIN',
      liveTest: 'http://christian-grund.developerakademie.net/Join/logIn.html',
      translatedDescription: '',
    },
    {
      mockup: 'pollo_loco.png',
      name: 'Pollo Loco',
      projectLanguage: 'JavaScript | HTML | CSS',
      description: 'polloLocoDescription',
      link: 'El-Pollo-Loco',
      liveTest:
        'http://christian-grund.developerakademie.net/El%20Pollo%20Loco/el_pollo_locco.html',
      translatedDescription: '',
    },
    {
      mockup: 'simple_crm.png',
      name: 'Simple CRM',
      projectLanguage: 'Angular | Firebase',
      description: 'simpleCRMDescription',
      link: '',
      liveTest: '#',
      translatedDescription: '',
    },
    {
      mockup: 'pokedex.png',
      name: 'Pokédex',
      projectLanguage: 'JavaScript | HTML | CSS | Api',
      description: 'pokedexDescription',
      link: 'Pokedex',
      liveTest:
        'https://christian-grund.developerakademie.net/Pokedex/pokedex.html',
      translatedDescription: '',
    },
  ];

  constructor(private translateService: TranslateService) {
    this.translateProjectDescriptions();
    AOS.init();
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

  onProjectHover(isHovering: boolean, index: number): void {
    const projectText = document.querySelectorAll('.project-text')[
      index
    ] as HTMLElement;
    if (isHovering) {
      const fadeClass = index % 2 === 0 ? 'fade-in-left' : 'fade-in-right';
      const positionClass =
        index % 2 === 0 ? 'right-position' : 'left-position';
      projectText.classList.add(fadeClass, positionClass);
      clearTimeout(Number(projectText.dataset['timer']));
    } else {
      projectText.classList.remove(
        'fade-in-left',
        'fade-in-right',
        'left-position',
        'right-position'
      );
      projectText.dataset['timer'] = String(
        setTimeout(() => {
          projectText.classList.add('fade-out');
        }, 300)
      );
    }
  }
}
