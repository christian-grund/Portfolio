import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-data-privacy',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './data-privacy.component.html',
  styleUrl: './data-privacy.component.scss',
})
export class DataPrivacyComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
