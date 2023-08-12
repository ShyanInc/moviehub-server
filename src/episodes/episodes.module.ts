import { Module } from '@nestjs/common';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Episode } from './episodes.model';
import { Series } from '../series/series.model';
import { SeriesEpisodes } from './series-episodes.model';
import { SeriesModule } from '../series/series.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [EpisodesController],
  providers: [EpisodesService],
  imports: [
    SequelizeModule.forFeature([Episode, Series, SeriesEpisodes]),
    SeriesModule,
    AuthModule,
  ],
})
export class EpisodesModule {}
