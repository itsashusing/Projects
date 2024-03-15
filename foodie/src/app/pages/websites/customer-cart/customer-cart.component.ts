import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../../services/cart/cart.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

declare var Razorpay: any;

@Component({
  selector: 'app-customer-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-cart.component.html',
  styleUrl: './customer-cart.component.css',
})
export class CustomerCartComponent {
  cart: any[] = [];
  quantity: any[] = [];
  total: number = 0;
  isUser = false
  constructor(private api: CartService, private auth: AuthService) {
    this.api.cartItemObs.subscribe((res: any) => {
      this.cart = res;
    });
    this.total = this.findTotal();


  }
  findTotal() {
    return this.cart.reduce((sum, i) => i.price + sum, 0);
  }
  remove(index: number) {
    this.api.removeItem(index)
    this.total = this.findTotal()
  }
  p!: boolean
  ngOnInit(): void {
    this.auth.userName.subscribe((res: any) => this.isUser = res)

  }

  payNow() {
    console.log(this.isUser)
    if (this.isUser) {
      const RozarpayOptions = {
        description: 'Sample Razorpay demo',
        currency: 'INR',
        amount: this.total * 100,
        name: 'Demo User',
        key: 'rzp_test_FuxEAJZxplaOIu',
        image: 'https://ecom245.netlify.app/assets/images/navlogo.svg',
        prefill: {
          name: 'Demo User',
          email: 'user@gmail.com',
          phone: '9858453625',
        },
        theme: {
          color: '#6466e3',
        },
        modal: {
          ondismiss: () => {
            alert("Paymeny cancelled")
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
      alert("Please first login to checkout process.")
    }
  }

}
