import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Genre } from './genres.model';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
  constructor(private genresService: GenresService) {}

  @ApiOperation({ summary: 'Get all genres' })
  @ApiResponse({ status: 200, type: [Genre] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.genresService.getAllGenres();
  }

  @ApiOperation({ summary: 'Get genre by value' })
  @ApiResponse({ status: 200, type: Genre })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.genresService.getGenreByValue(value);
  }

  @ApiOperation({ summary: 'Create genre' })
  @ApiResponse({ status: 201, type: Genre })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateGenreDto) {
    return this.genresService.createGenre(dto);
  }

  @ApiOperation({ summary: 'Update genre' })
  @ApiResponse({ status: 200, type: Genre })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Put('/:id')
  updateById(@Param('id') id: number, @Body() dto: UpdateGenreDto) {
    return this.genresService.updateGenreById(id, dto);
  }

  @ApiOperation({ summary: 'Delete genre' })
  @ApiResponse({ status: 204 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.genresService.deleteGenreById(id);
  }
}
