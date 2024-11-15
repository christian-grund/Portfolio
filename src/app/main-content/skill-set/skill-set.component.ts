import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatTabsModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  showFrontend: boolean = true;

  skillSetFrontend = [
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

  skillSetBackend = [
    { icon: 'linux.svg', name: 'Linux' },
    { icon: 'terminal.svg', name: 'Terminal' },
    { icon: 'python.svg', name: 'Python' },
    { icon: 'django.svg', name: 'Django' },
    { icon: 'sqlite.svg', name: 'SQLite' },
    { icon: 'redis.svg', name: 'Redis' },
    { icon: 'postgresql.svg', name: 'PostgreSQL' },
    { icon: 'docker.svg', name: 'Docker' },
    { icon: 'cloud.svg', name: 'Google Cloud' },
    { icon: 'heroku.svg', name: 'Heroku' },
  ];

  toggleSkills(type: string): void {
    const container = document.querySelector('.skill-set-container');
    if (type === 'frontend') {
      container?.classList.remove('show-backend');
    } else {
      container?.classList.add('show-backend');
    }
  }
}
