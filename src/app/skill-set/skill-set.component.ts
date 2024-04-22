import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skillSetIcons = [
    'angular.svg',
    'typescript.svg',
    'javascript.svg',
    'html.svg',
    'scrum.svg',
    'firebase.svg',
    'git.svg',
    'css.svg',
    'api.svg',
    'material_design.svg',
  ];

  skillSetNames = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Scrum',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Material Design',
  ];
}
