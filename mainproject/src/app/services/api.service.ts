import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private obj: HttpClient) {}
  getAddData() {
    return this.obj.get('https://dummyjson.com/products');
  } 
  getSingleData(id: number) {
    return this.obj.get(`https://dummyjson.com/products/${id}`);
  }
}
