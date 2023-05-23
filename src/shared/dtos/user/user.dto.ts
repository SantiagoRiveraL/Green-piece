import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  role: string;
}
