import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/interfaces/product';
import { ReturnedProducts } from 'src/app/products/interfaces/returned-products';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable<ReturnedProducts> {
    return this._HttpClient.get<ReturnedProducts>(environment.baseURL+'products');
  }

  addProduct(data:any):Observable<any> {
    return this._HttpClient.post(environment.baseURL+'products/add', data)
  }

  getProductDetails(id:number):Observable<Product> {
    return this._HttpClient.get<Product>(environment.baseURL+`products/${id}`);
  }

  updateProduct(data:any, id:any):Observable<any> {
    return this._HttpClient.put(environment.baseURL+'products/'+id,data)
  }

}
