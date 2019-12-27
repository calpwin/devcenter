import {Component, OnInit} from '@angular/core';
import {User} from "firebase";
import { AngularFireAuth } from '@angular/fire/auth';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'cdc-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this._afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this._router.navigate([this._route.snapshot.queryParamMap.get('redirectUrl') || '/']);
      }
    });
  }

  authSuccess(user: User) {
    // this._router.navigate([this._route.snapshot.queryParamMap.get('redirectUrl')]);
  }
}
