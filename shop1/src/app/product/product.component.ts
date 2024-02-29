import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  id: number;
  data!: any;
  items:any[]=[]
  constructor(private obj: DataapiService) {
    const url = window.location.href;
    const parts = url.split('/');
    this.id = Number(parts[parts.length - 1]);
    this.obj
      .getSingleData(this.id)
      .subscribe((data: any) => (this.data = data));

      this.obj.getAllData().subscribe((datas:any)=>this.items=datas)
  }
}
