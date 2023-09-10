import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ADMIN_ROLE, Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetMoviesQueryDto } from './dto/get-movies-query.dto';
import { SetMovieCoverImageDto } from './dto/set-movie-cover-image.dto';
import { Movie } from './movies.model';
import { MoviesService } from './movies.service';
import { parseQuery } from 'src/utils/query';
import { UpdateMovieDto } from './dto/update-movie.dto';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({ status: 200, type: [Movie] })
  @Get()
  getAll(@Query() query: GetMoviesQueryDto) {
    const limit = parseQuery(query.limit);
    const page = parseQuery(query.page);

    return this.moviesService.getAllMovies(limit, page);
  }

  @ApiOperation({ summary: 'Get movie by id' })
  @ApiResponse({ status: 200, type: Movie })
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.getMovieById(id);
  }

  @ApiOperation({ summary: 'Create movie' })
  @ApiResponse({ status: 201, type: Movie })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.moviesService.createMovie(dto);
  }

  @Put('/:id')
  updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMovieDto,
  ) {
    return this.moviesService.updateMovieById(id, dto);
  }

  @ApiOperation({ summary: 'Set cover image to existing movie' })
  @ApiResponse({ status: 200, type: Movie })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Patch('/cover')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  setCoverImage(
    @Body() dto: SetMovieCoverImageDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.moviesService.setMovieCoverImage(dto.id, image);
  }

  @ApiOperation({ summary: 'Delete movie' })
  @ApiResponse({ status: 204 })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.moviesService.deleteMovieById(id);
  }
}
