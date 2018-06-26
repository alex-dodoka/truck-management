import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AppAuthService {

  constructor(private authService: AngularFireAuth) {
  }

  public signInWithEmail(email, password) {
    return this.authService.auth
      .signInWithEmailAndPassword(email, password);
  }
}

