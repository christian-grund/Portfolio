import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() textChange = new EventEmitter<string>();
  underlineActive: number | null = null;

  aboutMe: string = 'About me';
  skillSet: string = 'Skill set';
  myWork: string = 'My work';
  buttonText: string = 'DE';
  h5Text: string = '';
  isTextEnglish: boolean = true;

  toggleUnderline(index: number): void {
    this.underlineActive = index;
  }

  changeLanguage() {
    this.changeLanguageHeader();
    this.changeLanguageLandingPage();

    this.isTextEnglish = !this.isTextEnglish;
  }

  changeLanguageHeader() {
    if (this.isTextEnglish) {
      this.aboutMe = 'Über mich';
      this.skillSet = 'Meine Skills';
      this.buttonText = 'EN';
    } else {
      this.aboutMe = 'About me';
      this.skillSet = 'Skill set';
      this.buttonText = 'DE';
    }
  }

  changeLanguageLandingPage() {
    if (this.isTextEnglish) {
      this.h5Text = 'Hallo! Ich bin Christian';
    } else {
      this.h5Text = 'Hello! I am Christian';
    }
    this.textChange.emit(this.h5Text);
  }

  changeLanguageAboutMe() {
    if (this.isTextEnglish) {
      this.h5Text = 'Hallo! Ich bin Christian';
    } else {
      this.h5Text = 'Hello! I am Christian';
    }
    this.textChange.emit(this.h5Text);
  }
}
