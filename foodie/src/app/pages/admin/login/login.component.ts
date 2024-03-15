
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  singupUser: any[] = []
  signupObj: any = {
    username: '',
    email: '',
    password: '',
  };
  loinObj: any = {
    username: '',
    password: '',
  };

  constructor(private router: Router,) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('singupUser');
    if (localData != null) {
      this.singupUser = JSON.parse(localData)
    }

  }

  isLoginMode = true
  onSignUp() {
    this.singupUser.push(this.signupObj)
    localStorage.setItem('singupUser', JSON.stringify(this.singupUser));
    this.signupObj = {
      username: '',
      email: '',
      password: '',
    };
  }

  onLogin() {
    const isUserExist = this.singupUser.find(m => m.username == this.loinObj.username && m.password == this.loinObj.password)
    if (this.loinObj.username == 'admin' && this.loinObj.password == "12345678") {
      this.router.navigateByUrl('/admin/products')
    } else if (isUserExist != undefined) {
      this.router.navigateByUrl('/allproducts')
    } else {
      alert('Wrong Credentials')
    }
  }
  changeMode() {
    this.isLoginMode = !this.isLoginMode
  }
}
