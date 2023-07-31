export class UpdateMovieDto {
  translatedTitle: string;
  originalTitle: string;
  country: string[];
  year: number;
  genre: string[];
  director: string[];
  actors: string[];
  screenwriters?: string[];
  producers?: string[];
  budget?: number;
  ageRestriction?: number;
  duration: number;
  coverImage: string;
  trailer?: string;
}
