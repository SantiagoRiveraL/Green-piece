import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class SupplierDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsEmail()
  email: string;

  @IsString()
  employeeName: string;

  @IsString()
  companyName: string;
}
