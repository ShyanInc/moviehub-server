import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesService.getAllMovies();
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.moviesService.getMovieById(id);
  }

  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.moviesService.createMovie(dto);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.moviesService.deleteMovieById(id);
  }
}
