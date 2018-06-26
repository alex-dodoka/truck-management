import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SECURITY_TOKEN} from '../util/security-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
  }

  // noinspection JSMethodCanBeStatic
  protected isToken() {
    return localStorage.getItem(SECURITY_TOKEN);
  }

  protected logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
