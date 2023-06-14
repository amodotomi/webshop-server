import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'man' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'man12345' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'man@gmail.com' })
  @IsNotEmpty()
  readonly email: string;
}
