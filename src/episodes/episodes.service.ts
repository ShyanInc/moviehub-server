import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Episode } from './episodes.model';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { SeriesService } from '../series/series.service';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectModel(Episode) private episodeRepository: typeof Episode,
    private seriesService: SeriesService,
  ) {}

  async getAllEpisodes() {
    return await this.episodeRepository.findAll();
  }

  async getEpisodeById(id: number) {
    const episode = await this.episodeRepository.findByPk(id);
    if (!episode) {
      throw new HttpException('Episode not found!', HttpStatus.NOT_FOUND);
    }
    return episode;
  }

  async getEpisodesBySeries(seriesId: number) {
    return await this.episodeRepository.findAll({ where: { seriesId } });
  }

  async createEpisode(dto: CreateEpisodeDto) {
    const series = await this.seriesService.getSeriesById(dto.seriesId);
    if (!series) {
      throw new HttpException('Series not found!', HttpStatus.NOT_FOUND);
    }
    const episode = await this.episodeRepository.create(dto);
    await episode.$set('series', series);
    episode.series = series;
    return episode;
  }

  async updateEpisodeById(dto: UpdateEpisodeDto) {
    const episode = await this.getEpisodeById(dto.episodeId);
    if (!episode) {
      throw new HttpException('Episode not found!', HttpStatus.NOT_FOUND);
    }
    episode.season = dto.season;
    episode.episode = dto.episode;
    episode.translatedTitle = dto.translatedTitle;
    episode.originalTitle = dto.originalTitle;
    episode.releaseDate = dto.releaseDate;

    await episode.save();

    return dto;
  }

  async deleteEpisodeById(id: string) {
    console.log(typeof id);
    const episode = await this.getEpisodeById(+id);
    if (!episode) {
      throw new HttpException('Episode not found!', HttpStatus.NOT_FOUND);
    }
    return await episode.destroy();
  }
}
