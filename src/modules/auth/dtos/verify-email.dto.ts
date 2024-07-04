import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class VerifyOTP {
  @ApiProperty({
    example: '123456',
    description:
      "The 4 digit otp code sent to a user's email upon signup used for email verification",
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @Transform(({ value }) => value?.toString())
  @IsString()
  OTPCode: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5ueXRlc3RpbmcxNEB5b3BtYWlsLmNvbSIsImlhdCI6MTY3MzQ1MDU4MywiZXhwIjoxNjczNTM2OTgzLCJhdWQiOiI0ZTA2OThiYy1jYWQ5LTQzODEtOTEyNC1mNWMwYjg5NjQyYWEifQ.zXYMQz5bNqxBkOmxIfahRIDKJA2ev6VP3wa5bJnR78Q',
    description: 'This is the jwt auth token generated for a user upon signup',
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  OTPToken: string;

  @ApiProperty({
    example: 'hello@gmail.com',
    description: 'This is the email address entered by the user on signup',
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value?.toLowerCase())
  email: string;
}
