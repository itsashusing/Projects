import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  empty: any[] = [];
  private cartItemSubject = new BehaviorSubject(this.empty);
  cartItemObs = this.cartItemSubject.asObservable();
  constructor() { }

  addValue(prod: object) {
    const items = this.cartItemSubject.getValue();
    this.cartItemSubject.next([...items, prod]);
  }
  getItems() {
    return this.cartItemSubject.getValue();
  }
  removeItem(index:any){
    const items = this.cartItemSubject.getValue();
    items.splice(index,1)
    this.cartItemSubject.next([...items])
  }
}
