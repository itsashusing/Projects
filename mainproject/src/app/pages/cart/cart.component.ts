import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  value = 0;
  cart: any[] = [];
  total!: number;
  constructor(private obj: ApiService) {
    this.obj.cartItemObs.subscribe((data: any) => (this.cart = data));
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
    this.obj.removevalue()
  }
}
