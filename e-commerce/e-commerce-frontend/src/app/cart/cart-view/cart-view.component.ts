import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cartItems : Cart[]=[]
  totalPrice : number = 0;

  constructor(
    private service : CartService
  ){}

  ngOnInit(): void {
    this.service.getCartItems().subscribe(
      items => {
        this.cartItems = items
        this.totalPrice = this.getTotalPrice()
      }
    )
  }

  getTotalPrice():number{
    
    let total = 0

    for (let item of this.cartItems){
      total += item.price
    }
    
    return total
  }

  clearCart() : void{
    this.service.clearCart().subscribe(
      () => {
        console.log('cart cleared successfully')
        window.location.reload();
      }
    )
  }

}
