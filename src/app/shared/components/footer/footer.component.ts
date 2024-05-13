import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(private elementRef: ElementRef) {}

  scrollToTop() {
    const windowRef = this.elementRef.nativeElement.ownerDocument.defaultView;

    windowRef.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
