import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit, OnDestroy {
  private langSubscription!: Subscription;
  currentLanguage: string = 'de';

  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef
  ) {}

  /**
   * Initializes the component by subscribing to the current language stream
   * from the LanguageService and updates the `currentLanguage` property.
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

  /**
   * Smoothly scrolls the window to the top of the page.
   * Uses the `elementRef` to access the window reference.
   */
  scrollToTop() {
    const windowRef = this.elementRef.nativeElement.ownerDocument.defaultView;

    windowRef.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
