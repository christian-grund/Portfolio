import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  projectImages = [
    'join.png',
    'pollo_loco.png',
    'simple_crm.png',
    'pokedex.png',
  ];
  projectNames = ['Join', 'Pollo Loco', 'Simple CRM', 'Pokédex'];
  projectLanguages = [
    'Angular | TypeScript | HTML | CSS | Firebase',
    'JavaScript | HTML | CSS',
    'Angular | Firebase',
    'JavaScript | HTML | CSS | Api',
  ];
  projectDescriptions = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    'A very Simple Customer Relationship Management system working with CRUD functionality. ',
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
  ];
  projectLinks = ['JOIN', 'El-Pollo-Loco', '', 'Pokedex'];

  onProjectHover(isHovering: boolean, index: number): void {
    const projectText = document.querySelectorAll('.project-text')[
      index
    ] as HTMLElement;
    if (isHovering) {
      const fadeClass = index % 2 === 0 ? 'fade-in-left' : 'fade-in-right';
      const positionClass =
        index % 2 === 0 ? 'right-position' : 'left-position'; // Anpassung der Positionsklassen
      projectText.classList.add(fadeClass, positionClass);
      clearTimeout(Number(projectText.dataset['timer'])); // Timer löschen, um sofortiges Ausblenden zu verhindern
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
      ); // Warte 300ms, bevor die fade-out Animation gestartet wird
    }
  }
}
