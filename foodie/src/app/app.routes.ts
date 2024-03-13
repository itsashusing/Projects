import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/websites/landing/landing.component';
import { CategoryProductsComponent } from './pages/websites/category-products/category-products.component';
import { WebProductsComponent } from './pages/websites/web-products/web-products.component';
import { CartComponent } from './pages/admin/cart/cart.component';
import { CustomerCartComponent } from './pages/websites/customer-cart/customer-cart.component';

export const routes: Routes = [
  { path: '', redirectTo: 'allproducts', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'allproducts', component: WebProductsComponent },
      { path: 'product/:str', component: CategoryProductsComponent },
      { path: 'cart', component: CustomerCartComponent },
    ],
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      { path: 'category', component: CategoriesComponent },
    ],
  },
];
