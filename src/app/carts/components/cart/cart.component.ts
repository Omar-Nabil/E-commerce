import { Component } from '@angular/core';
import { CartProduct } from 'src/app/products/interfaces/cart-product';
import { CartsService } from '../../sevices/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartProducts:CartProduct[] = [];
  total:number = 0;
  order:boolean = false;

  constructor(private _CartsService:CartsService) {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    this.calcTotal();
  }

  addProduct(index:number) {
    this.cartProducts[index].quantity++;
    this.detectProductsAmount();
  }

  delProduct(index:number) {
    if(this.cartProducts[index].quantity <= 0) {
      alert('you reached the min limit');
    } else {
      this.cartProducts[index].quantity--;
      this.detectProductsAmount();
    }
  }

  detectProductsAmount() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.calcTotal();
  }

  calcTotal() {
    this.total = 0;
    for (let x of this.cartProducts) {
      this.total += +x.item.price * x.quantity
    }
  }

  deleteItem(index:number) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.calcTotal();
  }

  clearShoppingCart() {
    this.cartProducts = [];
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.calcTotal();
  }

  orderNow() {
    let temp:object[] = [];
    for(let x in this.cartProducts) {
      temp.push(
        {id:this.cartProducts[x].item.id, quantity:this.cartProducts[x].quantity}
        )
    }
    const cart = {
      userId: 1,
      products: temp
    }

    this._CartsService.addCart(cart).subscribe({
      next:(res) => {
        console.log(res);
        this.order = true;
      },
      error:(err) => console.log(err)
    })
  }
}
