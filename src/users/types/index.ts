import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'man' })
  username: string;

  @ApiProperty({ example: 'man12345' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'man',
        password: 'man12345',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: 'logged in' })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'logged out' })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: '1' })
  userId: number;

  @ApiProperty({ example: 'man' })
  username: string;

  @ApiProperty({ example: 'man@gmail.com' })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: '1' })
  id: number;

  @ApiProperty({ example: 'man' })
  username: string;

  @ApiProperty({
    example: '$2b$10$37/SeIzm951FT4OvXhGECe5fEBxLCdxTws5g.mbrWN0WMpIlXMGN6',
  })
  password: string;

  @ApiProperty({ example: 'man@gmail.com' })
  email: string;

  @ApiProperty({ example: '2023-06-14T11:44:18.695Z' })
  updatedAt: string;

  @ApiProperty({ example: '2023-06-14T11:44:18.695Z' })
  createdAt: string;
}
