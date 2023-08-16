import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class SetSeriesCoverImageDto {
  @ApiProperty({
    example: 1,
    description: 'Unique identification',
    required: true,
  })
  @Transform(({ value }) => JSON.parse(value))
  @IsNumber({}, { message: 'Have to be a number' })
  id: number;

  @ApiProperty({
    description: 'Image file',
    type: 'string',
    format: 'binary',
    required: true,
  })
  image: Express.Multer.File;
}
