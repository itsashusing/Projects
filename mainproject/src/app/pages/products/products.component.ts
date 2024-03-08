import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  data: any[] = [];
  cat: any[] = [];
  value!: string;
  constructor(private obj: ApiService, private route: Router) {
    this.obj.getAllData().subscribe((data: any) => {
      this.data = data.products;
    });
    this.obj.getCategories().subscribe((catdata: any) => (this.cat = catdata));
  }

  add(product: object) {
    this.obj.addValue(product);
    alert('Product Added to cart.');
  }

  notFound = false;
  search() {
    this.obj.getSearchItem(this.value).subscribe((data: any) => {
      this.data = data.products;
      this.notFound = false;
      if (this.data.length < 1) {
        this.notFound = true;
      }
    });
  }
}
