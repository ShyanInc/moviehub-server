import { ApiProperty } from '@nestjs/swagger';

export class AuthResponseDto {
  @ApiProperty({ name: 'username', example: 'Username' })
  username: string;
  @ApiProperty({ name: 'name', example: 'Oleksandr' })
  name: string;
  @ApiProperty({ name: 'surname', example: 'Durov' })
  surname: string;
  @ApiProperty({ name: 'status', example: 'I am happy!' })
  status: string;
  @ApiProperty({ name: 'birthDate', example: '2000.01.01' })
  birthDate: Date;
  @ApiProperty({
    name: 'accessToken',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJVc2VybmFtZSIsImVtYWlsIjoiZW1haWxAZW1haWwuY29tIiwicm9sZXMiOlt7ImlkIjoxLCJ2YWx1ZSI6InVzZXIiLCJkZXNjcmlwdGlvbiI6IlVzZXIgcm9sZSIsIlVzZXJSb2xlcyI6eyJpZCI6MSwicm9sZUlkIjoxLCJ1c2VySWQiOjF9fV0sImlhdCI6MTY5NDAyNzUxOCwiZXhwIjoxNjk0MTEzOTE4fQ.aBg-K3853Fu1nhwcz4zPSVjztXXqFB4Xh470jZbqw-Y',
  })
  accessToken: string;

  constructor(
    username: string,
    name: string,
    surname: string,
    status: string,
    birthDate: Date,
    accessToken: string,
  ) {
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.status = status;
    this.birthDate = birthDate;
    this.accessToken = accessToken;
  }
}
