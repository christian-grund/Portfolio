import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    LandingPageComponent,
    AboutMeComponent,
    SkillSetComponent,
    MyWorkComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  // @ViewChild(LandingPageComponent) landingPageComponent!: LandingPageComponent;
  // onTextChange(text: string) {
  //   if (this.landingPageComponent) {
  //     this.landingPageComponent.updateText(text);
  //   } else {
  //     console.error('LandingPageComponent is undefined.');
  //   }
  // }
}
