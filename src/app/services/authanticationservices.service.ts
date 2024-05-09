import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthanticationservicesService {
  constructor(private auth: AngularFireAuth) {}
  signIn(parms: signIn): Observable<any> {
    return from(
      this.auth.signInWithEmailAndPassword(parms.email, parms.password)
    );
  }
  recoverPassword(email: string): Observable<void> {
    return from(this.auth.sendPasswordResetEmail(email));
  }

  logout(): Observable<any> {
    return from(this.auth.signOut());
  }
}

type signIn = {
  email: string;
  password: string;
};
