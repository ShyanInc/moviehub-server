import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';

@Controller('series')
export class SeriesController {
  constructor(private seriesService: SeriesService) {}

  @Get()
  getAll() {
    return this.seriesService.getAllSeries();
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.seriesService.getSeriesById(id);
  }

  @Post()
  create(@Body() dto: CreateSeriesDto) {
    return this.seriesService.createSeries(dto);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.seriesService.deleteSeriesById(id);
  }
}
