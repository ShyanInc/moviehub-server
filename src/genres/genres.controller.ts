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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Genre } from './genres.model';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @ApiOperation({ summary: 'Get all genres' })
  @ApiResponse({ status: 200, type: [Genre] })
  @Get()
  getAll() {
    return this.genresService.getAllGenres();
  }

  @ApiOperation({ summary: 'Get genre by value' })
  @ApiResponse({ status: 200, type: Genre })
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.genresService.getGenreByValue(value);
  }

  @ApiOperation({ summary: 'Create genre' })
  @ApiResponse({ status: 201, type: Genre })
  @Post()
  create(@Body() dto: CreateGenreDto) {
    return this.genresService.createGenre(dto);
  }

  @ApiOperation({ summary: 'Update genre' })
  @ApiResponse({ status: 200, type: Genre })
  @Put('/:id')
  updateById(@Param('id') id: number, @Body() dto: UpdateGenreDto) {
    return this.genresService.updateGenreById(id, dto);
  }

  @ApiOperation({ summary: 'Delete genre' })
  @ApiResponse({ status: 204 })
  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.genresService.deleteGenreById(id);
  }
}
