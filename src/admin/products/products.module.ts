import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { SelectorComponent } from './components/selector/selector.component';



@NgModule({
  declarations: [
    AllproductsComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
