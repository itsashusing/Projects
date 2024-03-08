import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getAddProduct() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  onSave(obj: any) {
    return this.http.post('https://fakestoreapi.com/products', obj);
  }
  onUpdate(id: number, prod: any) {
    return this.http.put(`https://fakestoreapi.com/products/${id}`, prod);
  }

  ondelete(obj: any, id: any) {
    return this.http.delete(`https://fakestoreapi.com/products/${id}`, obj);
  }
}
