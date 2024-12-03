import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language/language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit, OnDestroy {
  private langSubscription!: Subscription;
  currentLanguage: string = 'de';

  constructor(private languageService: LanguageService) {}

  /**
   * Initializes the component by subscribing to the current language stream
   * from the LanguageService and updates the currentLanguage property.
   */
  ngOnInit() {
    this.langSubscription = this.languageService.currentLang$.subscribe(
      (lang) => {
        this.currentLanguage = lang;
      }
    );
  }

  /**
   * Cleans up the component by unsubscribing from the language subscription
   * to prevent memory leaks.
   */
  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
