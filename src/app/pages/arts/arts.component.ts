import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { Artwork } from '../../shared/models/artwork.model';
import { LightboxComponent } from '../../shared/components/lightbox/lightbox.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-arts',
  standalone: true,
  imports: [LightboxComponent],
  templateUrl: './arts.component.html',
  styleUrl: './arts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArtsComponent {
  languageService = inject(LanguageService);
  selectedArtwork = signal<Artwork | null>(null);
  isLightboxOpen = signal(false);
  selectedIndex = signal(0);

  readonly artworks: readonly Artwork[] = [
    { id: '1', titleEn: 'Toast', titleMk: 'Здравица', year: 1983, mediumEn: 'Tempera', mediumMk: 'Темпера', dimensions: '35 × 55 cm', imageUrl: 'assets/images/artworks/1-zdravica-35x55-tempera-1983.webp', imageAlt: 'Zdravica - Tempera painting from 1983' },
    { id: '2', titleEn: 'Mother\'s Embrace', titleMk: 'Мајчина Прегратка', year: 1983, mediumEn: 'Tempera', mediumMk: 'Темпера', dimensions: '35 × 45 cm', imageUrl: 'assets/images/artworks/2-majcina-pregratka-35x45-tempera-1983.webp', imageAlt: 'Mother\'s Embrace - Tempera painting' },
    { id: '3', titleEn: 'The Wheel of Life', titleMk: 'Тркалото на Животот', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '70 × 50 cm', imageUrl: 'assets/images/artworks/3-trkaloto-na-zivotot-70x50-akril-2025.webp', imageAlt: 'The Wheel of Life - Acrylic painting' },
    { id: '4', titleEn: 'Eternal Love', titleMk: 'Вечна Љубов', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 70 cm', imageUrl: 'assets/images/artworks/4-vecna-ljubov-50x70-akril-2025.webp', imageAlt: 'Eternal Love - Acrylic painting' },
    { id: '5', titleEn: 'Bleki the Proud', titleMk: 'Блеки Гордиот', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '40 × 50 cm', imageUrl: 'assets/images/artworks/5-bleki-gordiot-40x50-akril-2024.webp', imageAlt: 'Bleki the Proud - Acrylic painting' },
    { id: '6', titleEn: 'Melody in Red', titleMk: 'Мелодија во Црвено', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 50 cm', imageUrl: 'assets/images/artworks/6-melodija-vo-crveno-60x50-akril-2025.webp', imageAlt: 'Melody in Red - Acrylic painting' },
    { id: '7', titleEn: 'Spirit of Strength', titleMk: 'Духот на Силата', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '80 × 60 cm', imageUrl: 'assets/images/artworks/7-duhot-na-silata-80x60-akril-2025.webp', imageAlt: 'Spirit of Strength - Acrylic painting' },
    { id: '8', titleEn: 'The White Wanderer', titleMk: 'Белиот Скитник', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '40 × 50 cm', imageUrl: 'assets/images/artworks/8-beliot-skitnik-40x50-akril-2024.webp', imageAlt: 'The White Wanderer - Acrylic painting' },
    { id: '9', titleEn: 'Tranquility of the Lake', titleMk: 'Спокој на Езерото', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 80 cm', imageUrl: 'assets/images/artworks/9-spokoj-na-ezeroto-60x80-akril-2025.webp', imageAlt: 'Tranquility of the Lake - Acrylic painting' },
    { id: '10', titleEn: 'Winter Idyll', titleMk: 'Зимска Идила', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '45 × 30 cm', imageUrl: 'assets/images/artworks/10-zimska-idila-45x30-akril-2024.webp', imageAlt: 'Winter Idyll - Acrylic painting' },
    { id: '11', titleEn: 'Wings of Freedom', titleMk: 'Крилја на Слободата', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 70 cm', imageUrl: 'assets/images/artworks/11-krilja-na-slobodata-50x70-akril-2025.webp', imageAlt: 'Wings of Freedom - Acrylic painting featuring an eagle' },
    { id: '12', titleEn: 'Wisdom in Silence (Self-Portrait)', titleMk: 'Мудрост во Тишината (Автопортрет)', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 80 cm', imageUrl: 'assets/images/artworks/12-mudrost-vo-tisinata-avtoportret-60x80-akril-2025.webp', imageAlt: 'Wisdom in Silence - Self-portrait' },
    { id: '13', titleEn: 'Grandpa Sanko - Pishica', titleMk: 'Дедо Санко - Пишица', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '80 × 60 cm', imageUrl: 'assets/images/artworks/13-dedo-Sanko-pisica-80x60-akril-2025.webp', imageAlt: 'Grandpa Sanko and the Cat - Acrylic painting' },
    { id: '14', titleEn: 'The Old Mill', titleMk: 'Старата Воденица', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '80 × 60 cm', imageUrl: 'assets/images/artworks/14-starata-vodenica-80x60-akril-2025.webp', imageAlt: 'The Old Mill - Acrylic painting' },
    { id: '15', titleEn: 'Guardian of the Valley', titleMk: 'Чуварот на Долината', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 60 cm', imageUrl: 'assets/images/artworks/15-cuvarot-na-dolinata-50x60-akril-2024.webp', imageAlt: 'Guardian of the Valley - Acrylic painting' },
    { id: '16', titleEn: 'Quiet Winter Night', titleMk: 'Тивка Зимска Ноќ', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 70 cm', imageUrl: 'assets/images/artworks/16-tivka-zimska-nokj-50x70-akril-2024.webp', imageAlt: 'Quiet Winter Night - Acrylic painting' },
    { id: '17', titleEn: 'Macedonian Girl (Lijana)', titleMk: 'Македонско Девојче (Лијана)', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 60 cm', imageUrl: 'assets/images/artworks/17-makedonsko-devojce-lijana-50x60-akril-2024.webp', imageAlt: 'Macedonian Girl - Lijana' },
    { id: '18', titleEn: 'Whispers of the Waterfall', titleMk: 'Шепотењата на Водопадот', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 90 cm', imageUrl: 'assets/images/artworks/18-sepotenjata-na-vodopadot-60x90-akril-2024.webp', imageAlt: 'Whispers of the Waterfall - Acrylic painting' },
    { id: '19', titleEn: 'Wild Spirit', titleMk: 'Дивиот Дух', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '70 × 50 cm', imageUrl: 'assets/images/artworks/19-diviot-duh-70x50-akril-2025.webp', imageAlt: 'Wild Spirit - Acrylic painting' },
    { id: '20', titleEn: 'Rage in Motion', titleMk: 'Бес во Движење', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 40 cm', imageUrl: 'assets/images/artworks/20-bes-vo-dvizenje-60x40-akril-2024.webp', imageAlt: 'Rage in Motion - Acrylic painting' },
    { id: '21', titleEn: 'Echoes from the Past', titleMk: 'Одзиви од Минатото', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '70 × 50 cm', imageUrl: 'assets/images/artworks/21-odzivi-od-minatoto-70x50-akril-2024.webp', imageAlt: 'Echoes from the Past - Acrylic painting' },
    { id: '22', titleEn: 'Contrast of Colors', titleMk: 'Контраст на Цветови', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '70 × 50 cm', imageUrl: 'assets/images/artworks/22-kontrast-na-cvetovi-70x50-akril-2024.webp', imageAlt: 'Contrast of Colors - Acrylic painting' },
    { id: '23', titleEn: 'Matador', titleMk: 'Матадор', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 40 cm', imageUrl: 'assets/images/artworks/23-matador-60x40-akril-2024.webp', imageAlt: 'Matador - Acrylic painting' },
    { id: '24', titleEn: 'Silent Guardians', titleMk: 'Тивки Стражари', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 60 cm', imageUrl: 'assets/images/artworks/24-tivki-strazari-50x60-akril-2024.webp', imageAlt: 'Silent Guardians - Acrylic painting' },
    { id: '25', titleEn: 'Messengers of Peace', titleMk: 'Гласници на Мирот', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 70 cm', imageUrl: 'assets/images/artworks/25-glasnici-na-mirot-50x70-akril-2025.webp', imageAlt: 'Messengers of Peace - Acrylic painting' },
    { id: '26', titleEn: 'Emerald Waterfall', titleMk: 'Смарагден Водопад', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 80 cm', imageUrl: 'assets/images/artworks/26-smaragden-vodopad-60x80-akril-2025.webp', imageAlt: 'Emerald Waterfall - Acrylic painting' },
    { id: '27', titleEn: 'Aurora', titleMk: 'Аурора', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 70 cm', imageUrl: 'assets/images/artworks/27-aurora-50x70-akril-2025.webp', imageAlt: 'Aurora - Mystical acrylic painting with northern lights' },
    { id: '28', titleEn: 'Dance of the Dolphin', titleMk: 'Танц на Делфинот', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 70 cm', imageUrl: 'assets/images/artworks/28-tanc-na-delfinot-50x70-akril-2024.webp', imageAlt: 'Dance of the Dolphin - Acrylic painting' },
    { id: '29', titleEn: 'Ocean Symphony', titleMk: 'Океанска Симфонија', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 70 cm', imageUrl: 'assets/images/artworks/29-okeanska-simfonija-60x70-akril-2024.webp', imageAlt: 'Ocean Symphony - Acrylic painting' },
    { id: '30', titleEn: 'The Gentle Genie', titleMk: 'Нежниот Џин', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 80 cm', imageUrl: 'assets/images/artworks/30-nezniot-dzin-60x80-akril-2025.webp', imageAlt: 'The Gentle Genie - Acrylic painting' },
    { id: '31', titleEn: 'Dance with the Sun', titleMk: 'Танц со Сонцето', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 70 cm', imageUrl: 'assets/images/artworks/31-tanc-so-sonceto-50x70-akril-2025.webp', imageAlt: 'Dance with the Sun - Acrylic painting' },
    { id: '32', titleEn: 'Winds from the Past', titleMk: 'Ветрови од Минатото', year: 2024, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '40 × 50 cm', imageUrl: 'assets/images/artworks/32-vetrovi-od-minatoto-40x50-akril-2024.webp', imageAlt: 'Winds from the Past - Acrylic painting' },
    { id: '33', titleEn: 'Sunset (Elešec)', titleMk: 'Зајдисонце (Елешец)', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '80 × 60 cm', imageUrl: 'assets/images/artworks/33-zajdisonce-eleshec-80x60-akril-2025.webp', imageAlt: 'Sunset at Eleshec - Acrylic painting' },
    { id: '34', titleEn: 'Grace of the Wind', titleMk: 'Грацијата на Ветрот', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '50 × 70 cm', imageUrl: 'assets/images/artworks/34-gracijata-na-vetrot-50x70-akril-2025.webp', imageAlt: 'Grace of the Wind - Mare in acrylic' },
    { id: '35', titleEn: 'Master of Silence', titleMk: 'Господар на Тишината', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 80 cm', imageUrl: 'assets/images/artworks/35-gospodar-na-tisinata-60x80-akril-2025.webp', imageAlt: 'Master of Silence - Tomcat in acrylic' },
    { id: '36', titleEn: 'King of Colors', titleMk: 'Кралот на Бојата', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 80 cm', imageUrl: 'assets/images/artworks/36-kralot-na-bojata-60x80-akril2025.webp', imageAlt: 'King of Colors - Peacock in acrylic' },
    { id: '37', titleEn: 'Tropical Refuge', titleMk: 'Тропско Засолниште', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 80 cm', imageUrl: 'assets/images/artworks/37-tropsko-zasolnishte.webp', imageAlt: 'Tropical Refuge - Serene seascape with red boat and palm trees' },
    { id: '38', titleEn: 'Pirates of the Caribbean', titleMk: 'Пиратите од Карибите', year: 2025, mediumEn: 'Acrylic', mediumMk: 'Акрил', dimensions: '60 × 80 cm', imageUrl: 'assets/images/artworks/38-piratite.webp', imageAlt: 'Pirates of the Caribbean - Sailing ship emerging from cave opening' }
  ];

  openLightbox(artwork: Artwork, index: number): void {
    this.selectedArtwork.set(artwork);
    this.selectedIndex.set(index);
    this.isLightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('lightbox-open');
  }

  closeLightbox(): void {
    this.isLightboxOpen.set(false);
    document.body.style.overflow = '';
    document.body.classList.remove('lightbox-open');
  }

  showNext(): void {
    const nextIndex = (this.selectedIndex() + 1) % this.artworks.length;
    this.selectedArtwork.set(this.artworks[nextIndex]);
    this.selectedIndex.set(nextIndex);
  }

  showPrevious(): void {
    const prevIndex = (this.selectedIndex() - 1 + this.artworks.length) % this.artworks.length;
    this.selectedArtwork.set(this.artworks[prevIndex]);
    this.selectedIndex.set(prevIndex);
  }
}
