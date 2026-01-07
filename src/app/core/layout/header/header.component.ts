import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  languageService = inject(LanguageService);

  get navItems() {
    return [
      { path: '/arts', label: this.languageService.t.nav.works },
      { path: '/about', label: this.languageService.t.nav.about }
    ];
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
