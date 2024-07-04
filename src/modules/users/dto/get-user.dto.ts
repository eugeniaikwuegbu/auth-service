import { IsOptional, IsString } from 'class-validator';

export class GetUserDto {
  @IsString()
  @IsOptional()
  _id?: string;

  @IsString()
  @IsOptional()
  email?: string;
}
