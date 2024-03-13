import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css',
})
export class CategoryProductsComponent {
  v!: any;
  ProductList: any[] = [];
  constructor(private route: ActivatedRoute, private api: ProductsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.v = params.get('str');
      // console.log('Parameter value in child component:', this.v);
      this.api
        .getCategoryWiseDate(this.v)
        .subscribe((res: any) => (this.ProductList = res));
    });
  }
}
