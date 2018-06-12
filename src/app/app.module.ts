import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {ROUTES} from './app.routes';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NoContentComponent} from './no-content/no-content.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {ENV_FIREBASE_CONFIG} from '../environments/environment.prod';
import {AppAuthService} from './service/app.auth.service';
import {AppFirestoreService} from './service/app.firestore.service';
import {AuthGuard} from './util/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    AngularFireModule.initializeApp(ENV_FIREBASE_CONFIG),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [AppAuthService,
    AppFirestoreService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
