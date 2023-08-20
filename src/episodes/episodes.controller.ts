import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Episode } from './episodes.model';
import { ADMIN_ROLE, Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Episodes')
@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @ApiOperation({ summary: 'Get all episodes' })
  @ApiResponse({ status: 200, type: [Episode] })
  @Get()
  getAll() {
    return this.episodesService.getAllEpisodes();
  }

  @ApiOperation({ summary: 'Get episode by id' })
  @ApiResponse({ status: 200, type: Episode })
  @Get('/:id')
  getBySeries(@Param('id', ParseIntPipe) seriesId: number) {
    return this.episodesService.getEpisodesBySeries(seriesId);
  }

  @ApiOperation({ summary: 'Create episode' })
  @ApiResponse({ status: 201, type: Episode })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateEpisodeDto) {
    return this.episodesService.createEpisode(dto);
  }

  @ApiOperation({ summary: 'Update episode' })
  @ApiResponse({ status: 200, type: Episode })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Put()
  update(@Body() dto: UpdateEpisodeDto) {
    return this.episodesService.updateEpisodeById(dto);
  }

  @ApiOperation({ summary: 'Delete episode' })
  @ApiResponse({ status: 204 })
  @Roles(ADMIN_ROLE)
  @UseGuards(RolesGuard)
  @Delete('/:id')
  deleteById(@Param('id', ParseIntPipe) id: number) {
    return this.episodesService.deleteEpisodeById(id);
  }
}
