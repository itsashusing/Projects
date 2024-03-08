import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  id!: number;
  product!: any;
  images: any[] = [];
  constructor(private obj: ApiService) {
    const url = window.location.href;
    const parts = url.split('/');
    this.id = Number(parts[parts.length - 1]);
    this.obj.getSingleData(this.id).subscribe((data: any) => {
      (this.product = data), (this.images = data.images);
    });
  }

  add(prod: any) {
    this.obj.addValue(prod);
  }
}
