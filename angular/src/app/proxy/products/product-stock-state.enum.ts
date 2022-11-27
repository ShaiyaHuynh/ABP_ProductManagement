import { mapEnumToOptions } from '@abp/ng.core';

export enum ProductStockState {
  PreOrder = 0,
  InStock = 1,
  NotAvailable = 2,
  Stopped = 3,
}

export const productStockStateOptions = mapEnumToOptions(ProductStockState);
