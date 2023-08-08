import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Series } from './series.model';

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
  getById(@Param('id') id: number) {
    return this.seriesService.getSeriesById(id);
  }

  @ApiOperation({ summary: 'Create series' })
  @ApiResponse({ status: 201, type: Series })
  @Post()
  create(@Body() dto: CreateSeriesDto) {
    return this.seriesService.createSeries(dto);
  }

  @ApiOperation({ summary: 'Delete series' })
  @ApiResponse({ status: 204 })
  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.seriesService.deleteSeriesById(id);
  }
}
