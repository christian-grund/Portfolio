import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('de');
  currentLang$ = this.currentLangSubject.asObservable();

  /**
   * Retrieves the current language value from the subject.
   *
   * @returns {string} The current language.
   */
  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

  /**
   * Updates the current language by emitting a new value to the subject.
   *
   * @param {string} lang - The new language to set.
   */
  changeLanguage(lang: string): void {
    this.currentLangSubject.next(lang);
  }
}
