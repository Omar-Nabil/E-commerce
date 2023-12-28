import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CartsModule,
    ProductsModule
  ]
})
export class AdminModule { }
