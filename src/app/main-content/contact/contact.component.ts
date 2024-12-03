import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../shared/services/language/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, OnDestroy {
  http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  nameIsFocused: boolean = false;
  emailIsFocused: boolean = false;
  textareaIsFocused: boolean = false;
  showErrorMessage: boolean = false;
  hovered: boolean = false;
  privacyPolicyChecked: boolean = false;
  clickCounter: number = 0;
  mailTest: boolean = false;
  isContainerVisible: boolean = false;
  currentLanguage: string = 'de';

  private langSubscription!: Subscription;

  constructor(private languageService: LanguageService) {}

  /**
   * Initializes the component by subscribing to the current language stream
   * from the LanguageService and updating the currentLanguage property.
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
   * to avoid memory leaks.
   */
  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  /**
   * Toggles the privacy policy checkbox state.
   */
  togglePrivacyPolicy() {
    this.privacyPolicyChecked = !this.privacyPolicyChecked;
  }

  /**
   * Increments the click counter.
   */
  toggleLabel() {
    this.clickCounter++;
  }

  /**
   * Toggles the visibility of a container element.
   */
  toggleContainer() {
    this.isContainerVisible = !this.isContainerVisible;
  }

  /**
   * Smoothly scrolls the window to the top of the page.
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Handles the form submission, sends data to a specified endpoint,
   * and resets the form after a delay.
   *
   * @param {NgForm} ngForm - The Angular form to validate and submit.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      this.toggleContainer();
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
      setTimeout(() => {
        this.toggleContainer();
        ngForm.resetForm();
        this.clickCounter = 0;
      }, 4000);
    }
  }

  /**
   * Configuration object for HTTP POST requests.
   */
  post = {
    endPoint: 'https://christian-grund.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
}
