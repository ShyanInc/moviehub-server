export class CreateSeriesDto {
  translatedTitle: string;
  originalTitle: string;
  country: string[];
  year: number;
  seasonsCount: number;
  director: string[];
  actors: string[];
  screenwriters?: string[];
  producers?: string[];
  ageRestriction?: number;
  duration: number;
  coverImage: string;
  trailer?: string;
  rating: number;
  genres: string[];
}
