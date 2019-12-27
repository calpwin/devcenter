import {Routes} from "@angular/router";
import {LoggedInGuard} from "ngx-auth-firebaseui";
import {UserAuthComponent} from "./app/user-auth/user-auth.component";
import {AppComponent} from "./app/app.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
    canActivate: [LoggedInGuard]
  },
  {
    path: 'auth',
    component: UserAuthComponent,
    pathMatch: 'full'
  }
];
