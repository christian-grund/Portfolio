import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'aos/dist/aos.js';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  // ngAfterViewInit(): void {
  //   AOS.init();
  // }

  constructor() {
    AOS.init();
  }
}
