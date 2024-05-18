import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
// import AOS from 'aos';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  skillSet = [
    { icon: 'angular.svg', name: 'Angular' },
    { icon: 'typescript.svg', name: 'TypeScript' },
    { icon: 'javascript.svg', name: 'JavaScript' },
    { icon: 'html.svg', name: 'HTML' },
    { icon: 'scrum.svg', name: 'Scrum' },
    { icon: 'firebase.svg', name: 'Firebase' },
    { icon: 'git.svg', name: 'GIT' },
    { icon: 'css.svg', name: 'CSS' },
    { icon: 'api.svg', name: 'Rest-Api' },
    { icon: 'material_design.svg', name: 'Material Design' },
  ];

  constructor() {
    // AOS.init();
  }
}
