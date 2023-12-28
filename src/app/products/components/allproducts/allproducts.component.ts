import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../../interfaces/cart-product';
import { Product } from '../../interfaces/product';
import { ReturnedProducts } from '../../interfaces/returned-products';
import { ProductsService } from '../../sevices/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {

  products:Product[] = [];
  categories:string[] = [];
  isLoading:boolean = false;
  cartProducts:CartProduct[] = [];

  constructor (private _ProductsService:ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.isLoading = true;
    this._ProductsService.getAllProducts().subscribe({
      next: (res:ReturnedProducts) => {
        this.products = res.products;
        this.isLoading = false;
      },
      error : (err) => console.log(err)
    })
  }
  getCategories() {
    this._ProductsService.getCategories().subscribe({
      next: (res:string[]) => {
        this.categories = res.splice(0,4);
      },
      error : (err) => console.log(err)
    })
  }
  filterProducts(event:any) {
    if(event.target.value === 'all') {
      this.getProducts();
    }
    else {
      this.getCategoryProducts(event.target.value);
    }
  }
  getCategoryProducts(value:string) {
    this.isLoading = true;
    this._ProductsService.getCategoryProducts(value).subscribe({
      next:(res:ReturnedProducts) => {
        this.products = res.products;
        this.isLoading = false;
      },
      error : (err) => console.log(err)
    })
  }

  addProductToCart(event:any) {
    if(localStorage.getItem('cart')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exit = this.cartProducts.find(item => item.item.id == event.item.id);
      if(exit)
        alert("Product is already in your cart");
      else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    }
    else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }


}
