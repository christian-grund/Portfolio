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
  projectLinks = [];
}
