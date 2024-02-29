import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataapiService {
  constructor(private obj: HttpClient) {}

  getAllData() {
    return this.obj.get('https://fakestoreapi.com/products');
  }
  getSingleData(id:number){
    return this.obj.get(`https://fakestoreapi.com/products/${id}`)
  }
}
