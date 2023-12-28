import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../sevices/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  id!:number;
  product:Product = {id:0,
  title:"",
  description:"",
  price:"",
  thumbnail:"",
  category:"",
  rating:"",
  stock:"",
  quantity:0};

  constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService) {
    this.id = +this._ActivatedRoute.snapshot.params['id'];
    this.displayProductDetails(this.id);
  }

  displayProductDetails(id:number) {
    this._ProductsService.getProductDetails(id).subscribe({
      next:(res) => {
        this.product = res;
        console.log(res);

      },
      error:(err) => console.log(err)

    })
  }


}
