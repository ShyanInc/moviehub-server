import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
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
import { CreateSeriesDto } from './dto/create-series.dto';
import { SetSeriesCoverImageDto } from './dto/set-series-cover-image.dto';
import { Series } from './series.model';
import { SeriesService } from './series.service';

@ApiTags('Series')
@Controller('series')
export class SeriesController {
  constructor(private seriesService: SeriesService) {}

  @ApiOperation({ summary: 'Get all series' })
  @ApiResponse({ status: 200, type: [Series] })
  @Get()
  getAll() {
    return this.seriesService.getAllSeries();
  }

  @ApiOperation({ summary: 'Get series by id' })
  @ApiResponse({ status: 200, type: Series })
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.seriesService.getSeriesById(id);
  }

  @ApiOperation({ summary: 'Create series' })
  @ApiResponse({ status: 201, type: Series })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateSeriesDto) {
    return this.seriesService.createSeries(dto);
  }

  @ApiOperation({ summary: 'Set cover image to existing series' })
  @ApiResponse({ status: 200, type: Series })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Patch('/cover')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image'))
  setCoverImage(
    @Body() dto: SetSeriesCoverImageDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.seriesService.setSeriesCoverImage(dto.id, image);
  }

  @ApiOperation({ summary: 'Delete series' })
  @ApiResponse({ status: 204 })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.seriesService.deleteSeriesById(id);
  }
}
