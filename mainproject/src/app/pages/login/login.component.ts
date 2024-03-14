import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private obj: AuthService, private router: Router) { }
  login(email: any, password: any) {
    this.obj
      .signin(email.control.value, password.control.value)
      .then((val) => {
        localStorage.setItem('email', email.control.value);
        alert('successfully logged in');
        this.router.navigateByUrl('dashboard');

      })
      .catch((err) => alert(err));

  }
}
