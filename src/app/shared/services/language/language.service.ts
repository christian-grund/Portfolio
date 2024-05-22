import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('de');
  currentLang$ = this.currentLangSubject.asObservable();

  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

  changeLanguage(lang: string): void {
    this.currentLangSubject.next(lang);
  }
}
