import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../services/products/products.service';
import { CartService } from '../../../services/cart/cart.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  CatList: any[] = [];
  isDropDown = false;
  totol: Number = 0;
  isLogin = false;
  constructor(
    private api: ProductsService,
    private cart: CartService,
    private route: Router,
    private auth: AuthService
  ) {
    this.auth.userName.subscribe((res: any) => {
      (this.isLogin = res);
    });
  }
  toggleDropdown() {
    this.isDropDown = !this.isDropDown;
  }
  ngOnInit(): void {
    this.getAllCategory();
    this.cart.cartItemObs.subscribe((res: any) => (this.totol = res.length));
  }

  getAllCategory() {
    this.api.getCategory().subscribe((res: any) => (this.CatList = res));
  }
  navigateCategory(cat: string) {
    this.isDropDown = !this.isDropDown;
    this.route.navigate(['/product', cat]);
  }
  logout() {
    this.auth.userName.next(false)
  }
}
