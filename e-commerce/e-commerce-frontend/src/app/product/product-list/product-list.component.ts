import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  
  constructor(
    private service : ProductService,
    private serviceCart : CartService,
    private snackBar : MatSnackBar
  ){}
  
  products : Product[] = []
  filteredProducts : Product[]=[]
  cart : Cart = new Cart()
  sortOrder : string = ''

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      products => {
        this.products = products
        this.filteredProducts = products
      }
    )
  }

  addToCart(product: Product) :void {
    
    this.cart.product_name = product.product_name
    this.cart.price = product.price
    console.log(this.cart)
     this.serviceCart.addToCart(this.cart).subscribe(
      {
        next : () => {
          this.snackBar.open('Item added to cart!', '',{
            duration :2000,
            horizontalPosition:'right',
            verticalPosition:'top'
          })
        }
      }
     )
    }

    applyFilter(event : Event) : void {
      let searchTerm = (event.target as HTMLInputElement).value.toLocaleLowerCase()

      this.filteredProducts = this.products.filter(
        product => product.product_name.toLocaleLowerCase().includes(searchTerm)
      )

      this.sortProducts(this.sortOrder)
    }

    sortProducts(sortValue : string){
      this.sortOrder = sortValue

      if(this.sortOrder === 'priceLowHigh'){
        this.filteredProducts.sort((a,b) => a.price - b.price)
      } else if(this.sortOrder ==='priceHighLow'){
        this.filteredProducts.sort((a,b) => b.price - a.price)
      }
    }

}
