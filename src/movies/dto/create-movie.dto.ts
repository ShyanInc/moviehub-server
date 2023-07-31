export class CreateMovieDto {
  translatedTitle: string;
  originalTitle: string;
  country: string[];
  year: number;
  director: string[];
  actors: string[];
  screenwriters?: string[];
  producers?: string[];
  budget?: number;
  ageRestriction?: number;
  duration: number;
  coverImage: string;
  trailer?: string;
  rating: number;
  genres: string[];
}
