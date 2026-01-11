import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/language.service';

interface NavItem {
  readonly path: string;
  readonly label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private languageService = inject(LanguageService);

  readonly isEnglish = computed(() => this.languageService.currentLanguage() === 'en');

  get navItems(): NavItem[] {
    return [
      { path: '/arts', label: this.languageService.t.nav.works },
      { path: '/about', label: this.languageService.t.nav.about }
    ];
  }

  get toggleButtonLabel(): string {
    return this.isEnglish() ? 'MK' : 'EN';
  }

  get toggleAriaLabel(): string {
    return `Switch to ${this.isEnglish() ? 'Macedonian' : 'English'}`;
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
