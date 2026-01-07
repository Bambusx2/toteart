import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, inject } from '@angular/core';
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
  languageService = inject(LanguageService);

  @Input() artwork: Artwork | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.onClose();
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

  onClose(): void {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox')) {
      this.onClose();
    }
  }

  getTitle(): string {
    if (!this.artwork) return '';
    return this.languageService.currentLanguage() === 'en'
      ? this.artwork.titleEn
      : this.artwork.titleMk;
  }

  getMedium(): string {
    if (!this.artwork) return '';
    return this.languageService.currentLanguage() === 'en'
      ? this.artwork.mediumEn
      : this.artwork.mediumMk;
  }
}
