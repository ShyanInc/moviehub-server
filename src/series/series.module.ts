import { Module } from '@nestjs/common';
import { SeriesController } from './series.controller';
import { SeriesService } from './series.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from '../genres/genres.model';
import { GenresModule } from '../genres/genres.module';
import { Series } from './series.model';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from '../files/files.module';

@Module({
  controllers: [SeriesController],
  providers: [SeriesService],
  imports: [
    SequelizeModule.forFeature([Series, Genre]),
    GenresModule,
    AuthModule,
    FilesModule,
  ],
  exports: [SeriesService],
})
export class SeriesModule {}
