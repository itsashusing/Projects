import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products/products.service';
import { connect } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  isSidePanel: boolean = false;
  // Project Object https://cdn.dummyjson.com/product-images/9/thumbnail.jpg
  projectObj: any = {
    Title: '',
    Price: '',
    Description: '',
    Image: '',
    Category: '',
  };
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
  }
  CategoryList: any[] = [];
  ProductList: any[] = [];
  getAllCategory() {
    this.productService.getCategory().subscribe((res: any) => {
      this.CategoryList = res;
    });
  }
  getAllProducts() {
    this.productService
      .getAddProduct()
      .subscribe((res: any) => (this.ProductList = res));
  }

  onsave() {
    this.productService.onSave(this.projectObj).subscribe((res: any) => {

      alert(`Product created successfully! ${res.title}`);
      this.getAllProducts();
    });
  }
  onedit(item: any) {
    this.projectObj = item;
    this.openSide();
  }
  onupdate(product: any) {
    this.productService
      .onUpdate(this.projectObj.id, product)
      .subscribe((res: any) =>
        alert(`Product updated  ${res.title},${res.price}`)
      );
  }
  openSide() {
    this.isSidePanel = true;
  }
  delete(item: any) {
    const isDel = confirm('Are you sure ?');
    if (isDel) {
      this.productService
        .ondelete(item, item.id)
        .subscribe((res) =>
          alert(`Product deleted successfully, ${item.title}`)
        );
      this.getAllProducts();
    }
  }
  closeSide() {
    this.isSidePanel = false;
  }
  reset() {
    this.projectObj = ''
  }
}
