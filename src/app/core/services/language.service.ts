import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'mk';

export interface Translations {
  nav: {
    works: string;
    about: string;
  };
  arts: {
    title: string;
    subtitle: string;
    viewFullSize: string;
  };
  about: {
    title: string;
    bio1: string;
    bio2: string;
    bio3: string;
    bio4: string;
    bio5: string;
    contactTitle: string;
    email: string;
    phone: string;
  };
  footer: {
    rights: string;
  };
  notFound: {
    title: string;
    message: string;
    backToWorks: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage = signal<Language>('mk');

  private translations: Record<Language, Translations> = {
    en: {
      nav: {
        works: 'Works',
        about: 'About the Artist'
      },
      arts: {
        title: 'Works',
        subtitle: 'A collection of paintings exploring nature, emotion, and the human experience',
        viewFullSize: 'View Full Size'
      },
      about: {
        title: 'About the Artist',
        bio1: 'Metodi Ivanov was born on January 23, 1960. His love for art awakened in early childhood—a quiet calling that would follow him throughout his life, waiting patiently for its time to fully emerge.',
        bio2: 'He completed his high school and university education in Štip, where the foundations of his worldview were shaped. His entire professional life was devoted to AD Makpetrol, where he worked with dedication and commitment.',
        bio3: 'In 2024, after retiring, Metodi received an extraordinary gift from his family for his birthday and retirement: canvas, a complete set of acrylic paints, easel, brushes, and complete painting equipment. He experienced that moment as a reminder and encouragement—it was time to return to where he belongs, in front of the canvas.',
        bio4: 'Since then, inspiration comes almost by itself. From January 2024 to today, he has created an entire cycle of paintings that testify to his passion, dedication, and artistic vision. His work explores the full spectrum of life—the majesty of nature, the warmth of Macedonian heritage, the depth of human emotion, and the quiet presence of animals.',
        bio5: 'For Metodi, painting is not a profession—it is a return to oneself. It is a space where time slows, where silence speaks, and where the spirit finds its truest expression.',
        contactTitle: 'Get in Touch',
        email: 'Email',
        phone: 'Phone'
      },
      footer: {
        rights: 'All rights reserved.'
      },
      notFound: {
        title: 'Page Not Found',
        message: 'The page you are looking for does not exist.',
        backToWorks: 'Back to Works'
      }
    },
    mk: {
      nav: {
        works: 'Дела',
        about: 'За уметникот'
      },
      arts: {
        title: 'Дела',
        subtitle: 'Колекција слики кои ја истражуваат природата, емоциите и човечкото искуство',
        viewFullSize: 'Погледни цела'
      },
      about: {
        title: 'За уметникот',
        bio1: 'Методи Иванов е роден на 23 јануари 1960 година. Неговата љубов кон уметноста се разбудила уште во раното детство—тивок повик што го следел низ целиот живот, трпеливо чекајќи го своето време да изрони во полн сјај.',
        bio2: 'Тој ги завршува средното и високото образование во Штип, каде се обликувале темелите на неговиот поглед на светот. Целиот свој професионален живот го посветил на АД Макпетрол, каде работел со посветеност и одговорност.',
        bio3: 'Во 2024 година, по пензионирањето, Методи од своето семејство добива несекојдневен подарок за роденден и пензија: платно, комплет акрилни бои, штафелај, четки и целосна сликарска опрема. Тој миг го доживува како потсетник и поттик—време е повторно да се врати таму каде што припаѓа, пред платното.',
        bio4: 'Од тогаш, инспирацијата доаѓа речиси сама по себе. Од јануари 2024 до денес, тој создава цел циклус на слики кои сведочат за неговата страст, посветеност и уметничка визија. Неговото дело ги истражува сите аспекти на животот—величественоста на природата, топлината на македонското наследство, длабочината на човечките емоции и тивкото присуство на животните.',
        bio5: 'За Методи, сликањето не е професија—тоа е враќање кон самиот себе. Тоа е простор каде времето се забавува, каде тишината зборува, и каде духот наоѓа свој најавтентичен израз.',
        contactTitle: 'Контакт',
        email: 'Е-пошта',
        phone: 'Телефон'
      },
      footer: {
        rights: 'Сите права задржани.'
      },
      notFound: {
        title: 'Страницата не е пронајдена',
        message: 'Страницата која ја барате не постои.',
        backToWorks: 'Назад кон дела'
      }
    }
  };

  get t(): Translations {
    return this.translations[this.currentLanguage()];
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
  }

  toggleLanguage(): void {
    this.currentLanguage.set(this.currentLanguage() === 'en' ? 'mk' : 'en');
  }
}
