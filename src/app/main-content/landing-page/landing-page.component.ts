import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnChanges {
  // @Input() language!: string;
  // currentLanguage: string = '';
  @Input() selectedLanguage!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['language']) {
      this.selectedLanguage = changes['language'].currentValue;
    }
  }

  getHeadlineClass(): string {
    return this.selectedLanguage === 'de' ? 'headline-de' : 'headline-en';
  }
}
