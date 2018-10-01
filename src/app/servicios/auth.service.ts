import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, rejected) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => rejected(err));
    });
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, rejected) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => rejected(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map ( auth => auth));
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
