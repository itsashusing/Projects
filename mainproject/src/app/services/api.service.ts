import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  empty: any[] = [];
  private cartSubject = new BehaviorSubject(0);
  cartSubobs = this.cartSubject.asObservable();

  private cartItemSubject = new BehaviorSubject(this.empty);
  cartItemObs = this.cartItemSubject.asObservable();

  constructor(private obj: HttpClient) {}

  // add to cart
  addValue(prod: object) {
    const c = this.cartSubject.getValue();
    this.cartSubject.next(c + 1);
    // console.log('c value',c)
    const items = this.cartItemSubject.getValue();
    this.cartItemSubject.next([...items, prod]);
    // console.log('cart value',items)
  }
  getCount() {
    return this.cartSubject.getValue();
  }

  getItems() {
    return this.cartItemSubject.getValue();
  }

  getAllData() {
    return this.obj.get('https://dummyjson.com/products');
  }
  getSearchItem(value: string) {

    return this.obj.get(`https://dummyjson.com/products/search?q=${value}`);
  }
 
  getCategories(){
    return this.obj.get('https://dummyjson.com/products/categories')
  }

  getSingleData(id: number) {
    return this.obj.get(`https://dummyjson.com/products/${id}`);
  }
}
