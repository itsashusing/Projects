import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}
  isLoggedIn = new BehaviorSubject(false);
  async signup(email: string, password: string) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      
      return userCredential;
    } catch (error) {
      throw error; // Re-throw for handling in components
    }
  }
  async signin(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.isLoggedIn.next(true);
      return userCredential;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async signout() {
    await this.auth.signOut();
    // this.isLoggedIn.next(false);
    alert('Sign Out');
  }
}
