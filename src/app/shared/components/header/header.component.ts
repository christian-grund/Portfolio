import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  underlineActive: number | null = null;

  constructor(public translateService: TranslateService) {}

  changeLanguage(langCode: string) {
    this.translateService.use(langCode);
  }

  toggleUnderline(index: number): void {
    this.underlineActive = index;
  }
}
