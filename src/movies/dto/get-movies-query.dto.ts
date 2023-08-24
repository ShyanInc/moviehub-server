import { IsOptional } from 'class-validator';

export class GetMoviesQueryDto {
  @IsOptional()
  limit?: string;
  @IsOptional()
  page?: string;
}
