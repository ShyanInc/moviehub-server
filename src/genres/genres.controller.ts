import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @Get()
  getAll() {
    return this.genresService.getAllGenres();
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.genresService.getGenreByValue(value);
  }

  @Post()
  create(@Body() dto: CreateGenreDto) {
    return this.genresService.createGenre(dto);
  }

  @Put()
  updateByValue(@Body() dto: UpdateGenreDto) {
    return this.genresService.updateGenreById(dto);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.genresService.deleteGenreById(id);
  }
}
