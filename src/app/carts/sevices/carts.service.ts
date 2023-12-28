import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private _HttpClient:HttpClient) { }

  addCart(cart:object):Observable<any> {
    return this._HttpClient.post(environment.baseURL+'carts/add', cart);
  }
}
