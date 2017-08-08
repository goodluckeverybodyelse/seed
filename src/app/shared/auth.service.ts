import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {  }

  logInWithEmailPassword(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOut(){
    this.afAuth.auth.signOut();
  }
}
