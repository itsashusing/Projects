import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  search!: string;
  c!: Number;
  email!: any;
  constructor(private obj: AuthService, private api: ApiService, private route: Router) {
    this.api.cartSubobs.subscribe((data) => (this.c = data));
    this.email = localStorage.getItem('email')
    // console.log(this.user)
  }

  out() {
    this.obj.signout().then();
    localStorage.clear()
    this.route.navigateByUrl('')
    location.reload()
   
  }
  isPhone = false;

  mobile() {
    this.isPhone = !this.isPhone;
  }


}
