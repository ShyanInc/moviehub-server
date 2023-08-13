import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies.model';
import { Genre } from '../genres/genres.model';
import { GenresModule } from '../genres/genres.module';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from '../files/files.module';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [
    SequelizeModule.forFeature([Movie, Genre]),
    GenresModule,
    AuthModule,
    FilesModule,
  ],
})
export class MoviesModule {}
