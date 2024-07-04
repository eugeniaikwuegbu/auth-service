import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    example: 'hello@gmail.com',
    description: 'Email address of the user',
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Transform(({ value }) => value?.toLowerCase())
  email: string;

  @ApiProperty({
    example: 'Hello@!#23',
    description: "User's password",
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class ResendVerificationDTO {
  @ApiProperty({
    example: 'hello@gmail.com',
    description: 'Email address of the user',
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Transform(({ value }) => value?.toLowerCase())
  email: string;
}
