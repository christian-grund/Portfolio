import { CommonModule } from '@angular/common';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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

  ngOnInit() {
    // Abonniere das Observable, um Sprachänderungen zu verfolgen
    this.langSubscription = this.languageService.currentLang$.subscribe(
      (lang) => {
        this.currentLanguage = lang;
        console.log('Current language in landing page:', this.currentLanguage);
      }
    );
  }

  ngOnDestroy() {
    // Kündige das Abonnement, um Speicherlecks zu vermeiden
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
