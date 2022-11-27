import type { CategoryLookupDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiName = 'Default';
  

  getCategories = () =>
    this.restService.request<any, ListResultDto<CategoryLookupDto>>({
      method: 'GET',
      url: '/api/app/category/categories',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
