import {Component} from '@angular/core';
import {AppAuthService} from '../service/app.auth.service';
import {SECURITY_TOKEN} from '../util/security-constants';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  protected login: string;
  protected password: string;
  protected error: any;

  constructor(private auth: AppAuthService, private router: Router) {
  }

  public onSubmit() {
    this.error = undefined;

    return this.auth.signInWithEmail(this.login, this.password)
      .then((resp) => localStorage.setItem(SECURITY_TOKEN, `${resp.user.uid}::${Date.now()}`))
      .then(() => this.router.navigate(['dashboard']))
      .catch((err) => {
        localStorage.clear();
        return this.error = err;
      });
  }

}
