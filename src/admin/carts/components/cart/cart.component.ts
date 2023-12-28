import { Component } from '@angular/core';
import { Cart } from '../../interfaces/cart';
import { Cartdetails } from '../../interfaces/cartdetails';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  carts:Cart[] = [];
  cartDetails:Cartdetails = {
    discountedTotal:0,
  id:0,
  products:[],
  total:0,
  totalProducts:0,
  totalQuantity:0,
  userId:0,
  quantity:0
  };

  constructor(private _CartService:CartService) {
    this.getAllCarts();
  }

  getAllCarts() {
    this._CartService.getCart().subscribe({
      next:(res) => {
        this.carts = res.carts;
        console.log(res);

      }
    })
  }

  delete(cart:Cart) {
    this._CartService.deleteCart(cart.id).subscribe({
      next:(res:Cart) => {
        console.log(res);

      }
    })
  }

  view(index:number) {
    this._CartService.getSingleCart(index).subscribe({
      next:(res) => {
        this.cartDetails = res;
        console.log(res);

      }
    })
  }
}
