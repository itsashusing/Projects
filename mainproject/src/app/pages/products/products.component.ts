import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  data: any[] = [];
  constructor(private obj: ApiService) {
    this.obj.getAddData().subscribe((data: any) => (this.data = data.products));
  }

  add(product:object){
    this.obj.addValue(product)
  }
}
