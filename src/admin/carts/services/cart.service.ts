import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  getCart():Observable<any> {
    return this._HttpClient.get(environment.baseURL+'carts');
  }

  deleteCart(id:number):Observable<any> {
    return this._HttpClient.delete(environment.baseURL+'carts/'+id);
  }

  getSingleCart(id:number):Observable<any> {
    return this._HttpClient.get(environment.baseURL+'carts/'+id);
  }
}
