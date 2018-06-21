import {Routes} from '@angular/router';


import {LoginFormComponent} from './login-form/login-form.component';


import {DashboardComponent} from './dashboard/dashboard.component';
import {NoContentComponent} from './no-content/no-content.component';
import {AuthGuard} from './util/auth-guard';


export const ROUTES: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoContentComponent},
];
