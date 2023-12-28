import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';

const routes: Routes = [
  {path:"", redirectTo:"products", pathMatch:'full'},
  {path:"products", component:AllproductsComponent},
  {path:"cart", component:CartComponent},
  {path:"**", redirectTo:"products", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
