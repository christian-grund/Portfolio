import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit {
  // @Input() language!: string;
  // currentLanguage: string = '';
  // @Input() selectedLanguage!: string;

  private langSubscription!: Subscription;

  constructor(public translateService: TranslateService) {}

  ngOnInit() {
    // this.langSubscription = this.translateService.currentLang$.subscribe(lang => {
    //   console.log('Current language:', lang);
    // });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['translateService']) {
  //     console.log("changes['translateService']");
  //     this.getCurrentLanguage();
  //   } else {
  //     console.log('no changes!');
  //   }
  // }

  getCurrentLanguage() {
    const currentLanguage = this.translateService.currentLang;
    const defaultLanguage = this.translateService.defaultLang;

    console.log('landingPage translateService.currentLang', currentLanguage); // Oder setze es auf eine Variable, zeige es im Template an etc.
    console.log('landingPage translateService.defaultLang', defaultLanguage); // Oder setze es auf eine Variable, zeige es im Template an etc.
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   // if (changes['language']) {
  //   //   this.selectedLanguage = changes['language'].currentValue;
  //   // }
  // }

  // getHeadlineClass(): string {
  //   return this.selectedLanguage === 'de' ? 'headline-de' : 'headline-en';
  // }
}
