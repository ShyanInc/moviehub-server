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
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Movie } from './movies.model';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({ status: 200, type: [Movie] })
  @Get()
  getAll() {
    return this.moviesService.getAllMovies();
  }

  @ApiOperation({ summary: 'Get movie by id' })
  @ApiResponse({ status: 200, type: Movie })
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.moviesService.getMovieById(id);
  }

  @ApiOperation({ summary: 'Create movie' })
  @ApiResponse({ status: 201, type: Movie })
  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.moviesService.createMovie(dto);
  }

  @ApiOperation({ summary: 'Delete movie' })
  @ApiResponse({ status: 204 })
  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.moviesService.deleteMovieById(id);
  }
}
