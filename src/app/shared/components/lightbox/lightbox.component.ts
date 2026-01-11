import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, inject, computed } from '@angular/core';
import { Artwork } from '../../models/artwork.model';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LightboxComponent {
  private languageService = inject(LanguageService);
  private isEnglish = computed(() => this.languageService.currentLanguage() === 'en');

  @Input() artwork: Artwork | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.close.emit();
  }

  @HostListener('document:keydown.arrowRight')
  onArrowRight(): void {
    if (this.isOpen) {
      this.next.emit();
    }
  }

  @HostListener('document:keydown.arrowLeft')
  onArrowLeft(): void {
    if (this.isOpen) {
      this.previous.emit();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('lightbox')) {
      this.close.emit();
    }
  }

  getTitle(): string {
    if (!this.artwork) return '';
    return this.isEnglish() ? this.artwork.titleEn : this.artwork.titleMk;
  }

  getMedium(): string {
    if (!this.artwork) return '';
    return this.isEnglish() ? this.artwork.mediumEn : this.artwork.mediumMk;
  }
}
