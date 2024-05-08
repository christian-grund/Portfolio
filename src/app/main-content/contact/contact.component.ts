import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
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
  mailTest: boolean = true;

  togglePrivacyPolicy() {
    console.log('privacyPolicyChecked', this.privacyPolicyChecked);
    this.privacyPolicyChecked = !this.privacyPolicyChecked;
  }

  toggleLabel() {
    this.clickCounter++;
  }

  post = {
    // endPoint: 'https://deineDomain.de/sendMail.php', // Anpassen!!!
    endPoint: 'https://verenaschranz.de/sendMail.php', // Anpassen!!!
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted && !this.mailTest) {
      console.log('contactData:', this.contactData);
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('ngForm.submitted && ngForm.form.valid && this.mailTest');
      ngForm.resetForm();
    } else if (!ngForm.form.valid) {
      console.error('Form not valid!');
    }
  }
}
