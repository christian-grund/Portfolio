import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, HttpClientModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  underlineActive: number | null = null;
  isOverlayActive: boolean = false;
  buttonActive = false;
  selectedLanguage: string = 'de';

  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService
  ) {}

  /**
   * Changes the application's language by updating the translation service,
   * notifying the language service, and setting the selected language.
   *
   * @param {string} langCode - The language code to switch to (e.g., 'en', 'de').
   */
  changeLanguage(langCode: string) {
    this.translateService.use(langCode);
    this.languageService.changeLanguage(langCode);
    this.selectedLanguage = langCode;
  }

  /**
   * Activates an underline for the given index, typically used for UI elements.
   *
   * @param {number} index - The index of the element to underline.
   */
  toggleUnderline(index: number): void {
    this.underlineActive = index;
  }

  /**
   * Toggles the visibility of the overlay menu.
   */
  toggleMenu() {
    this.isOverlayActive = !this.isOverlayActive;
  }

  /**
   * Toggles the active state of a button.
   */
  toggleButton() {
    this.buttonActive = !this.buttonActive;
  }
}
