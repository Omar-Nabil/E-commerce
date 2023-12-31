import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

const routes: Routes = [
  {path:"", redirectTo:"products", pathMatch:"full"},
  {path: "products",component: AllproductsComponent},
  {path: "cart",component: CartComponent},
  {path: "products/:id",component:ProductDetailsComponent },
  {path:'admin', loadChildren:()=>import('../admin/admin.module').then((res)=>res.AdminModule)},
  {path:"**", redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
