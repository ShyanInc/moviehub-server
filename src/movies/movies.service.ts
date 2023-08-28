import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from './movies.model';
import { CreateMovieDto } from './dto/create-movie.dto';
import { GenresService } from '../genres/genres.service';
import { Genre } from 'src/genres/genres.model';
import { FilesService } from '../files/files.service';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie) private movieRepository: typeof Movie,
    private genresService: GenresService,
    private filesService: FilesService,
  ) {}

  // TODO: optimize limit & page query logic
  async getAllMovies(limit: number | undefined, page: number | undefined) {
    if (Number.isNaN(limit) || Number.isNaN(page)) {
      throw new BadRequestException('Invalid query params');
    }

    if (limit && page > 0) {
      const offset = limit * page - limit;
      return await this.movieRepository.findAll({
        limit,
        offset,
        include: { all: true },
      });
    }

    if (limit) {
      return await this.movieRepository.findAll({
        limit,
        include: { all: true },
      });
    }

    return await this.movieRepository.findAll({ include: { all: true } });
  }

  async getMovieById(id: number) {
    const movie = await this.movieRepository.findByPk(id, { include: [Genre] });
    if (!movie) {
      throw new HttpException('Movie not found!', HttpStatus.NOT_FOUND);
    }

    return movie;
  }

  async createMovie(dto: CreateMovieDto) {
    const genres: Genre[] = [];
    for (const genreValue of dto.genres) {
      try {
        const genre = await this.genresService.getGenreByValue(genreValue);
        genres.push(genre);
      } catch (e) {
        throw new HttpException(
          `${genreValue} genre not found!`,
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    const movie = await this.movieRepository.create(dto);
    for (const genre of genres) {
      await movie.$add('genres', genre.id);
      movie.genres = [genre];
    }
    return movie;
  }

  async setMovieCoverImage(movieId: number, image: any) {
    const fileName = await this.filesService.createFile(image);
    const movie = await this.movieRepository.findByPk(movieId);

    if (!movie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }

    movie.coverImage = fileName;
    return await movie.save();
  }

  async deleteMovieById(id: number) {
    const movie = await this.movieRepository.findByPk(id);
    if (!movie) {
      throw new HttpException('Movie not found!', HttpStatus.NOT_FOUND);
    }

    return await movie.destroy();
  }
}
