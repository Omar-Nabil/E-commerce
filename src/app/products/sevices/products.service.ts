import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../interfaces/product';
import { ReturnedProducts } from '../interfaces/returned-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<ReturnedProducts> {
    return this._HttpClient.get<ReturnedProducts>(environment.baseURL+'products');
  }
  getCategories():Observable<string[]> {
    return this._HttpClient.get<string[]>(environment.baseURL+'products/categories');
  }
  getCategoryProducts(keyword:string):Observable<ReturnedProducts> {
    return this._HttpClient.get<ReturnedProducts>(environment.baseURL+`products/category/${keyword}`);
  }
  getProductDetails(id:number):Observable<Product> {
    return this._HttpClient.get<Product>(environment.baseURL+`products/${id}`);
  }
}
