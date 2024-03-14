import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart/cart.service';

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
  constructor(private route: ActivatedRoute, private api: ProductsService, private cart: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.v = params.get('str');

      this.api
        .getCategoryWiseDate(this.v)
        .subscribe((res: any) => (this.ProductList = res));
    });
  }

  addToCart(item: any) {
    this.cart.addValue(item);

  }
}
