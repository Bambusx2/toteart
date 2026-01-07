export interface Artwork {
  readonly id: string;
  readonly titleEn: string;
  readonly titleMk: string;
  readonly year: number;
  readonly mediumEn: string;
  readonly mediumMk: string;
  readonly dimensions: string;
  readonly imageUrl: string;
  readonly imageAlt: string;
  readonly imageSrcset?: {
    readonly thumb: string;
    readonly medium: string;
    readonly large: string;
  };
}
