import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { CartService } from '../../../services/cart/cart.service';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css',
})
export class WebProductsComponent {
  ProductList: any[] = [];

  constructor(private api: ProductsService, private cart: CartService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.api.getAddProduct().subscribe((res: any) => {
      this.ProductList = res;
    });
  }
  productObj: any = {
    userId: Number,
    date: new Date(),
    products: [{ productId: Number, quantity: Number }],
  };
  addToCart(item: any) {
    this.cart.addValue(item);
    
  }
}
