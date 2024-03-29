import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import * as process from 'process';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Episode } from './episodes/episodes.model';
import { EpisodesModule } from './episodes/episodes.module';
import { SeriesEpisodes } from './episodes/series-episodes.model';
import { FilesModule } from './files/files.module';
import { Genre } from './genres/genres.model';
import { GenresModule } from './genres/genres.module';
import { MovieGenres } from './genres/movie-genres.model';
import { SeriesGenres } from './genres/series-genres.model';
import { Movie } from './movies/movies.model';
import { MoviesModule } from './movies/movies.module';
import { Role } from './roles/roles.model';
import { RolesModule } from './roles/roles.module';
import { UserRoles } from './roles/user-roles.model';
import { Series } from './series/series.model';
import { SeriesModule } from './series/series.module';
import { UserMovies } from './users/userMovies/user-movies.model';
import { UserSeries } from './users/userSeries/user-series.model';
import { User } from './users/users.model';
import { UsersModule } from './users/users.module';
import { UserInfo } from './users/usersInfo/users-info.model';

@Module({
  controllers: [],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
      serveRoot: '/static',
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
    FilesModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor(private appService: AppService) {}

  onModuleInit() {
    this.appService.initializeRoles();
  }
}
