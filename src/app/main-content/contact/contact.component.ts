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
  // http = inject(HttpClient);
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  mailTest = true;
  checkboxBackground: string =
    'url(../../../assets/img/icons/checkbox/checkbox_default.svg) no-repeat';

  changeCheckboxBackground(hover: boolean) {
    if (hover) {
      this.checkboxBackground =
        'url(../../../assets/img/icons/checkbox/checkbox_default_hover.svg) no-repeat';
    } else {
      this.checkboxBackground =
        'url(../../../assets/img/icons/checkbox/checkbox_default.svg) no-repeat';
    }
  }

  enableButton() {
    // Your enableButton logic here
  }

  // post = {
  //   endPoint: 'https://deineDomain.de/sendMail.php',
  //   body: (payload: any) => JSON.stringify(payload),
  //   options: {
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       responseType: 'text',
  //     },
  //   },
  // };
  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.valid && ngForm.submitted && !this.mailTest) {
  //     console.log('contactData:', this.contactData);
  //     this.http
  //       .post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response) => {
  //           ngForm.resetForm();
  //         },
  //         error: (error) => {
  //           console.error(error);
  //         },
  //         complete: () => console.info('send post complete'),
  //       });
  //   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
  //     ngForm.resetForm();
  //   }
  // }
}
