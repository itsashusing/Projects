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
  constructor(private obj: ApiService) {
    this.obj.getAddData().subscribe((data: any) => (this.cart = data.products));
  }

  plus() {
    if (this.value > 9) {
      alert(" You can't select more than 10 items once.");
    } else {
      this.value++;
    }
  }
  minus() {
    if (this.value > 0) {
      this.value--;
    } else {
      alert('Cart is empty.');
    }
  }
}
