import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PreloadAllModules, RouterModule} from '@angular/router';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';

import {ENV_FIREBASE_CONFIG} from '../environments/environment.prod';

import {AppComponent} from './app.component';

import {ROUTES} from './app.routes';
import {LoginFormComponent} from './authentication-and-registration/login-form/login-form.component';
import {RegistrationFormComponent} from './authentication-and-registration/registration-form/registration-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {NoContentComponent} from './no-content/no-content.component';

import {AppAuthService} from './service/app.auth.service';
import {AppFirestoreService} from './service/app.firestore.service';
import {AuthGuard} from './util/auth-guard';
import {DragulaModule} from 'ng2-dragula';


@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
    DashboardComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    HeaderComponent
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
    AngularFireStorageModule,
    DragulaModule
  ],
  providers: [AppFirestoreService,
    AppAuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
