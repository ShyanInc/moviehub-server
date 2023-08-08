import { ApiProperty } from '@nestjs/swagger';

export class UpdateGenreDto {
  @ApiProperty({ example: 'drama', description: 'Genre value' })
  value: string;

  @ApiProperty({ example: 'Drama', description: 'Genre description' })
  description: string;
}
