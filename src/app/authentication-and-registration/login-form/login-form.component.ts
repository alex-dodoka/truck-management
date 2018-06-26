import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AppAuthService} from '../../service/app.auth.service';
import {SECURITY_TOKEN} from '../../util/security-constants';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  protected login: string;
  protected password: string;
  protected error: any;

  constructor(private auth: AppAuthService, private router: Router) {
  }

  public onSubmit() {
    this.error = undefined;

    return this.auth.signInWithEmail(this.login, this.password)
      .then((resp) => localStorage.setItem(SECURITY_TOKEN, `${resp.uid}::${Date.now()}`))
      .then(() => this.router.navigate(['dashboard']))
      .catch((err) => {
        localStorage.clear();
        return this.error = err;
      });
  }

}
