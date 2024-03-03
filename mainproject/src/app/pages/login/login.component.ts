import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private obj: AuthService) {}
  isLogin = false;
  login(email: any, password: any) {
    this.obj
      .signin(email.control.value, password.control.value)
      .then((val) => {
        alert('successfully logged in');
        this.isLogin=true;
      })
      .catch((err) => alert(err));
  }
}
