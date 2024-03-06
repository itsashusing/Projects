import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private obj: AuthService, private router: Router) {}
  isLogin = false;
  login(email: any, password: any) {
    this.obj
      .signin(email.control.value, password.control.value)
      .then((val) => {
        // console.log(val)
        alert('successfully logged in');
        localStorage.setItem('Name', email.control.value);
        this.router.navigateByUrl('/dashboard');
        this.isLogin = true;
      })
      .catch((err) => alert(err));
  }
}
