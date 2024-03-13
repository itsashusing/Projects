import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

declare var Razorpay: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  // keyid=rzp_test_FuxEAJZxplaOIu
  // secert=Mi7UAy9JYNvI3mbp3FRTtxWm
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
    this.obj.removevalue();
  }
  payNow() {
    if (this.total > 0) {
      const RozarpayOptions = {
        description: 'Sample Razorpay demo',
        currency: 'INR',
        amount: this.total * 100,
        name: 'User',
        key: 'rzp_test_FuxEAJZxplaOIu',
        image: 'https://ecom245.netlify.app/assets/images/navlogo.svg',
        prefill: {
          name: 'User',
          email: 'user@gmail.com',
          phone: '9858453625',
        },
        theme: {
          color: '#6466e3',
        },
        modal: {
          ondismiss: () => {
            console.log('dismissed');
          },
        },
      };
      const successCallback = (paymentid: any) => {
        console.log(paymentid);
      };

      const failureCallback = (e: any) => {
        console.log(e);
      };

      Razorpay.open(RozarpayOptions, successCallback, failureCallback);
    } else {
      alert('Please Add some thing in cart.');
    }
  }
}
