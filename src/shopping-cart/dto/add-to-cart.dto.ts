import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class AddToCardDto {
  @ApiProperty({ example: 'man' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  userID?: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly productId: number;
}
