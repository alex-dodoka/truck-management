import {Component} from '@angular/core';
import {SECURITY_TOKEN} from './util/security-constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  protected isToken() {
    return localStorage.getItem(SECURITY_TOKEN);
  }

  protected logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
