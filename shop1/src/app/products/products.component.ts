import { Component, Input } from '@angular/core';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  @Input() like: any;
  data: any[] = [];
  constructor(private obj: DataapiService) {
    this.obj.getAllData().subscribe((data: any) => (this.data = data));
  }

  getData(id: number) {
    this.obj.getSingleData(id).subscribe((data: any) => console.log(data));
  }
}
