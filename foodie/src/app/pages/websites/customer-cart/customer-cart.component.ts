import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';
import { routes } from '../../../app.routes';
import { tick } from '@angular/core/testing';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule],
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
  }
  findTotal() {
    return this.cart.reduce((sum, i) => i.price + sum, 0);
  }
  remove(index: number) {
    const a = this.cart;
    a.splice(index, 1);
    this.cart = a;
    this.total = this.findTotal();
  }
}
