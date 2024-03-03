import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
})
export class SingupComponent {
  constructor(private obj: AuthService, private router:Router) {}
  email!: string;
  password!: string;

  register(password: any, email: any) {
    if (
      email.control.value.trim() == '' ||  password.control.value.trim() == ''
    ) {
      alert('please fill the form');
    } else {
      this.obj
        .signup(email.control.value, password.control.value)
        .then((val) => { console.log(val);
          this.router.navigate(['login']);
        }) .catch((err) => alert(err));
    }
  }
}
