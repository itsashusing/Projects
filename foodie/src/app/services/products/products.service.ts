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
  getCategoryWiseDate(cat: string) {
    return this.http.get('https://fakestoreapi.com/products/category/' + cat);
  }
  // all product
  getAddProduct() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getSingleProduct(id: number) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }
  getCustomerCart() {
    return this.http.get('https://fakestoreapi.com/carts/user/2');
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
