import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsValidPassword } from '../../auth/decorators/password-decorator';

export class CreateUserDTO {
  @ApiProperty({
    example: 'John',
    description: "User's first name",
  })
  @IsNotEmpty()
  @IsString()
  firstName?: string;

  @ApiProperty({
    example: 'Doe',
    description: "User's last name",
  })
  @IsNotEmpty()
  @IsString()
  lastName?: string;

  @ApiProperty({
    example: 'hello@gmail.com',
    description: 'Email address of the user',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Transform(({ value }) => value?.toLowerCase())
  email: string;

  @ApiProperty({
    example: 'Hello@!#23',
    description: "User's password",
  })
  @IsString()
  @IsValidPassword()
  password: string;
}
