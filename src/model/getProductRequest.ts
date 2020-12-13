import { IsArray, IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetProductRequest {
  @IsOptional()
  name: string;

  @IsArray()
  branch: string[];

  @IsNumberString()
  minPrice: number;

  @IsNumberString()
  maxPrice: number;

  @IsString()
  sortBy: string;

  @IsString()
  sortDirection: string;
}
