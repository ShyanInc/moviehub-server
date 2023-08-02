export class UpdateEpisodeDto {
  episodeId: number;
  season: number;
  episode: number;
  translatedTitle: string;
  originalTitle: string;
  releaseDate: Date;
}
