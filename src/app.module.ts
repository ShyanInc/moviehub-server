import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import * as process from 'process';
import { User } from './users/users.model';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { MoviesModule } from './movies/movies.module';
import { SeriesModule } from './series/series.module';
import { UserInfo } from './users/usersInfo/users-info.model';
import { Genre } from './genres/genres.model';
import { Movie } from './movies/movies.model';
import { MovieGenres } from './genres/movie-genres.model';
import { UserMovies } from './users/userMovies/user-movies.model';
import { Series } from './series/series.model';
import { SeriesGenres } from './genres/series-genres.model';
import { Episode } from './episodes/episodes.model';
import { UserSeries } from './users/userSeries/user-series.model';
import { GenresModule } from './genres/genres.module';
import { EpisodesModule } from './episodes/episodes.module';
import { SeriesEpisodes } from './episodes/series-episodes.model';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        UserInfo,
        Genre,
        MovieGenres,
        Movie,
        SeriesGenres,
        Series,
        Episode,
        SeriesEpisodes,
        UserMovies,
        UserSeries,
      ],
      autoLoadModels: true,
      synchronize: true,
      sync: { alter: true },
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    MoviesModule,
    SeriesModule,
    GenresModule,
    EpisodesModule,
  ],
})
export class AppModule {}
