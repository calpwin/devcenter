import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from "@angular/material";

import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from "../environments/environment";
import {RouterModule} from "@angular/router";
import {routes} from "../routes";
import { UserAuthComponent } from './user-auth/user-auth.component';

export function getProjName() { return 'calpvin-devcenter'; }

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    CKEditorModule,
    AngularFireModule.initializeApp(environment.firebase, 'calpvin-devcenter'),
    AngularFireAuthModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase, getProjName,
      {
        authGuardFallbackURL: '/auth'
      })
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
