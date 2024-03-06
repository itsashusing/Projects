import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  search!: string;
  c!: Number;
  constructor(private obj: AuthService, private api: ApiService) {
    this.api.cartSubobs.subscribe((data) => (this.c = data));
  }

  out() {
    this.obj.signout().then();
  }
  isPhone = false;

  mobile() {
    this.isPhone = !this.isPhone;
  }
}
