import {Routes} from '@angular/router';

import {LoginFormComponent} from './authentication-and-registration/login-form/login-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NoContentComponent} from './no-content/no-content.component';
import {AuthGuard} from './util/auth-guard';
import {RegistrationFormComponent} from "./authentication-and-registration/registration-form/registration-form.component";

export const ROUTES: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoContentComponent},
];
