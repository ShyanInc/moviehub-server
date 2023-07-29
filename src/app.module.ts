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

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
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
        UserMovies,
      ],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    MoviesModule,
    SeriesModule,
  ],
})
export class AppModule {}
