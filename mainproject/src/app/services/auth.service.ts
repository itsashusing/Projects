import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}
  async signup(email: string, password: string) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      // Optionally, store additional user data in Firestore using firestore service
      console.log('User signup');
      return userCredential;
    } catch (error) {
      console.error(error);
      throw error; // Re-throw for handling in components
    }
  }
  async signin(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      console.log('User sign in');
      return userCredential;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async signout() {
    await this.auth.signOut();
    alert('Sign Out')
  }
}
