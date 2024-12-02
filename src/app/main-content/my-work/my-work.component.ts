import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  circles = [1, 2, 3, 4, 5, 6];

  projects = [
    {
      mockup: 'videoflix.png',
      name: 'Videoflix',
      projectLanguage: 'TypeScript | HTML | CSS | Angular | Python | Django',
      description: 'videoflixDescription',
      link_frontend: 'videoflix-frontend',
      link_backend: 'videoflix-backend',
      liveTest: 'https://videoflix.christian-grund.dev',
      translatedDescription: '',
    },
    {
      mockup: 'join.png',
      name: 'Join',
      projectLanguage: 'JavaScript | HTML | CSS | Python | Django',
      description: 'joinDescription',
      link_frontend: 'join-frontend',
      link_backend: 'join-backend',
      liveTest: 'https://join.christian-grund.dev',
      translatedDescription: '',
    },
    {
      mockup: 'portfolio.png',
      name: 'Portfolio',
      projectLanguage: 'TypeScript | HTML | SCSS | Angular ',
      description: 'portfolioDescription',
      link_frontend: 'Portfolio',
      link_backend: '',
      liveTest: 'https://christian-grund.dev',
      translatedDescription: '',
    },
    {
      mockup: 'pollo_loco.png',
      name: 'Pollo Loco',
      projectLanguage: 'JavaScript | HTML | CSS',
      description: 'polloLocoDescription',
      link_frontend: 'El-Pollo-Loco',
      link_backend: '',
      liveTest: 'https://polloloco.christian-grund.dev',
      translatedDescription: '',
    },
    {
      mockup: 'coderr.png',
      name: 'Coderr (Comming soon!)',
      projectLanguage: 'Python | Django',
      description: 'coderrDescription',
      link_frontend: '',
      link_backend: '',
      liveTest: '',
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

  playVideo() {
    const videoPlayer = this.videoPlayer.nativeElement;
    videoPlayer.play();
  }

  pauseVideo() {
    const videoPlayer = this.videoPlayer.nativeElement;
    videoPlayer.pause();
  }

  replayVideo() {
    const videoPlayer = this.videoPlayer.nativeElement;
    videoPlayer.currentTime = 0;
    videoPlayer.play();
  }
}
