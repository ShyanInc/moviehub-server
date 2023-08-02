import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  getAll() {
    return this.episodesService.getAllEpisodes();
  }

  @Get('/:id')
  getBySeries(@Param('id') seriesId: number) {
    return this.episodesService.getEpisodesBySeries(seriesId);
  }

  @Post()
  create(@Body() dto: CreateEpisodeDto) {
    return this.episodesService.createEpisode(dto);
  }

  @Put()
  update(@Body() dto: UpdateEpisodeDto) {
    return this.episodesService.updateEpisodeById(dto);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    return this.episodesService.deleteEpisodeById(id);
  }
}
