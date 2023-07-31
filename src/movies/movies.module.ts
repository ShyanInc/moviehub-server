import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies.model';
import { Genre } from '../genres/genres.model';
import { GenresModule } from '../genres/genres.module';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [SequelizeModule.forFeature([Movie, Genre]), GenresModule],
})
export class MoviesModule {}
