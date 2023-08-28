import { IsOptional } from 'class-validator';

export class GetSeriesQueryDto {
  @IsOptional()
  limit?: string;
  @IsOptional()
  page?: string;
}
