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
  skillSetIconsTop = [
    'angular.svg',
    'typescript.svg',
    'javascript.svg',
    'html.svg',
    'scrum.svg',
  ];
  skillSetIconsBottom = [
    'firebase.svg',
    'git.svg',
    'css.svg',
    'api.svg',
    'material_design.svg',
  ];

  skillSetNamesTop = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'Scrum'];
  skillSetNamesBottom = [
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Material Design',
  ];
}
