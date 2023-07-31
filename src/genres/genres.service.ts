import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Genre } from './genres.model';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from '../movies/dto/update-genre.dto';

@Injectable()
export class GenresService {
  constructor(@InjectModel(Genre) private genreRepository: typeof Genre) {}

  async getAllGenres() {
    return await this.genreRepository.findAll();
  }

  async getGenreByValue(value: string) {
    return await this.genreRepository.findOne({ where: { value } });
  }

  async createGenre(dto: CreateGenreDto) {
    const candidate = await this.genreRepository.findOne({
      where: { value: dto.value },
    });
    if (candidate) {
      throw new HttpException(
        'This genre already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this.genreRepository.create(dto);
  }

  async updateGenreById(dto: UpdateGenreDto) {
    const genre = await this.genreRepository.findByPk(dto.genreId);
    if (!genre) {
      throw new HttpException('Genre not found!', HttpStatus.NOT_FOUND);
    }

    genre.value = dto.value;
    genre.description = dto.description;
    await genre.save();
    return dto;
  }

  async deleteGenreById(id: number) {
    const genre = await this.genreRepository.findByPk(id);
    if (!genre) {
      throw new HttpException('Genre not found!', HttpStatus.NOT_FOUND);
    }

    return await genre.destroy();
  }
}
