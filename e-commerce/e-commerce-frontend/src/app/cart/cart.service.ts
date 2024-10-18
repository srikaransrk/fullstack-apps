import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.baseUrl;
  
  constructor(
    private http : HttpClient
  ) { }


  addToCart(cart : Cart) : Observable<Cart>{
    return this.http.post<Cart>(this.apiUrl  + '/cart', cart)
  }

  getCartItems() : Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl + '/carts')
  }

  clearCart() : Observable<void>{
    return this.http.delete<void>(this.apiUrl + '/carts')
  }
}
