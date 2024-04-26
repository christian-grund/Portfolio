import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  underlineActive: number | null = null;

  toggleUnderline(index: number): void {
    this.underlineActive = index;
  }
}
