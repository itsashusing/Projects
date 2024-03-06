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
    console.log('Total Find');
    return this.cart.reduce((sum, i) => i.price + sum, 0);
  }
  remove(index: number) {
    const a = this.cart;
    a.splice(index, 1);
    this.cart = a;
    this.total = this.findTotal();
  }
  // plus() {
  //   if (this.value > 9) {
  //     alert(" You can't select more than 10 items once.");
  //   } else {
  //     this.value++;
  //   }
  // }
  // minus() {
  //   if (this.value > 0) {
  //     this.value--;
  //   } else {
  //     alert('Cart is empty.');
  //   }
  // }
}
