import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  catList: any[] = [];
  constructor(private api: ProductsService) {
    this.api.getCategory().subscribe((res:any)=>{this.catList=res})
  }

}
