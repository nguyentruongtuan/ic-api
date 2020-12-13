import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class GetProductViewRequest {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  branch: string;

  @IsOptional()
  color: string;

  @IsOptional()
  @IsNumberString()
  minPrice: number;

  @IsNumberString()
  @IsOptional()
  maxPrice: number;

  @IsOptional()
  sortBy: string;

  @IsOptional()
  sortDirection: string;
}
