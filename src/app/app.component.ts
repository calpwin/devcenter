import {Component, OnInit} from '@angular/core';

import * as firebase from "firebase";
import * as firebaseui from "firebaseui";


@Component({
  selector: 'cdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyA-muRhisD2v8EZuBYI_yaMLS8Fvx8h6qk",
      authDomain: "calpvin-devcenter.firebaseapp.com",
      databaseURL: "https://calpvin-devcenter.firebaseio.com",
      projectId: "calpvin-devcenter",
      storageBucket: "calpvin-devcenter.appspot.com",
      messagingSenderId: "652397528928",
      appId: "1:652397528928:web:0bbd9c773a9fad3b1e8005",
      measurementId: "G-BXJYP0CSS6"
    };

    firebase.initializeApp(firebaseConfig);

    const ui = new firebaseui.auth.AuthUI(firebase.auth());


      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
          }
        ],
        // Other config options...
      });
  }
}
