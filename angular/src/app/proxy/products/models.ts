import type { ProductStockState } from './product-stock-state.enum';
import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateProductDto {
  categoryId?: string;
  name: string;
  price: number;
  isFreeCargo: boolean;
  releaseDate?: string;
  stockState: ProductStockState;
}

export interface ProductDto extends AuditedEntityDto<string> {
  categoryId?: string;
  categoryName?: string;
  name?: string;
  price: number;
  isFreeCargo: boolean;
  releaseDate?: string;
  stockState: ProductStockState;
}
