import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Genre } from './genres.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [GenresController],
  providers: [GenresService],
  imports: [SequelizeModule.forFeature([Genre]), AuthModule],
  exports: [GenresService],
})
export class GenresModule {}
