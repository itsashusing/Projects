import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  empty: any[] = [];
  private cartItemSubject = new BehaviorSubject(this.empty);
  cartItemObs = this.cartItemSubject.asObservable();
  constructor() {}

  addValue(prod: object) {
    // const c = this.cartSubject.getValue();
    // this.cartSubject.next(c + 1);
    // console.log('c value',c)
    const items = this.cartItemSubject.getValue();
    this.cartItemSubject.next([...items, prod]);
    // console.log('cart value',items)
  }
  getItems() {
    return this.cartItemSubject.getValue();
  }
}
