export class CreateEpisodeDto {
  seriesId: number;
  season: number;
  episode: number;
  translatedTitle: string;
  originalTitle: string;
  releaseDate: Date;
}
