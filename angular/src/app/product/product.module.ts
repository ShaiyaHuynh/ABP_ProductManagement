import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule, 
    NgxDatatableModule
  ]
})
export class ProductModule { }
