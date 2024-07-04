import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsValidPassword } from '../decorators/password-decorator';

export class ResetPasswordDTO {
  @ApiProperty({
    example: 'Hello@!#23',
    description: "User's new password",
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsValidPassword()
  password: string;

  @ApiProperty({
    example: 'Hello@!#23',
    description: "User's confirm passord entry",
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  confirmPassword: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueXRlc3RpbmcxNEB5b3BtYWlsLmNvbSIsImlhdCI6MTY3MzQ1MDU4MywiZXhwIjoxNjczNTM2OTgzLCJhdWQiOiI0ZTA2OThiYy1jYWQ5LTQzODEtOTEyNC1mNWMwYjg5NjQyYWEifQ.zXYMQz5bNqxBkOmxIfahRIDKJA2ev6VP3wa5bJnR78Q',
    description:
      'This is the jwt token generated when the forgot password request was initiated',
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  codeToken: string;
}
