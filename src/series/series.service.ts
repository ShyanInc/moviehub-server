import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from 'src/genres/genres.model';
import { FilesService } from '../files/files.service';
import { GenresService } from '../genres/genres.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { Series } from './series.model';

@Injectable()
export class SeriesService {
  constructor(
    @InjectModel(Series) private seriesRepository: typeof Series,
    private genresService: GenresService,
    private filesService: FilesService,
  ) {}

  async getAllSeries() {
    return await this.seriesRepository.findAll({ include: { all: true } });
  }

  async getSeriesById(id: number) {
    const series = await this.seriesRepository.findByPk(id, {
      include: [Genre],
    });

    if (!series) {
      throw new HttpException('Series not found!', HttpStatus.NOT_FOUND);
    }

    return series;
  }

  async createSeries(dto: CreateSeriesDto) {
    const series = await this.seriesRepository.create(dto);
    for (const genreValue of dto.genres) {
      const genre = await this.genresService.getGenreByValue(genreValue);
      if (genre) {
        await series.$add('genres', genre.id);
        series.genres = [genre];
      }
    }

    return series;
  }

  async setSeriesCoverImage(seriesId: number, image: any) {
    const fileName = await this.filesService.createFile(image);
    const series = await this.seriesRepository.findByPk(seriesId);

    if (!series) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }

    series.coverImage = fileName;
    return await series.save();
  }

  async deleteSeriesById(id: number) {
    const series = await this.seriesRepository.findByPk(id);
    if (!series) {
      throw new HttpException('Movie not found!', HttpStatus.NOT_FOUND);
    }

    return await series.destroy();
  }
}
