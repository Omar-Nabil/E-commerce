import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ItemComponent } from './components/item/item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    AllproductsComponent,
    ProductDetailsComponent,
    SelectComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductsModule { }
