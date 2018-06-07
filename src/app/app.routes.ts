import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NoContentComponent} from './no-content/no-content.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: NoContentComponent}
];
