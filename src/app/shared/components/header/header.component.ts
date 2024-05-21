import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, HttpClientModule, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  underlineActive: number | null = null;
  isOverlayActive: boolean = false;
  buttonActive = false;
  selectedLanguage: string = 'en';

  // @Input() selectedLanguage: string = 'en';

  constructor(public translateService: TranslateService) {}

  changeLanguage(langCode: string) {
    this.translateService.use(langCode);
    this.selectedLanguage = langCode;
  }

  toggleUnderline(index: number): void {
    this.underlineActive = index;
  }

  toggleMenu() {
    this.isOverlayActive = !this.isOverlayActive;
  }

  toggleButton() {
    this.buttonActive = !this.buttonActive;
  }
}
