import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';

import { CartService } from '../../../services/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.css',
})
export class CustomerCartComponent {
  cart: any[] = [];
  quantity: any[] = [];
  total: number = 0;
  constructor(private api: CartService) {
    this.api.cartItemObs.subscribe((res: any) => {
      this.cart = res;
    });
    this.total = this.findTotal();
    // this.cart = this.api.getItems()
  }
  findTotal() {
    return this.cart.reduce((sum, i) => i.price + sum, 0);
  }
  remove(index: number) {
    this.api.removeItem(index)
    this.total = this.findTotal()
  }

}
