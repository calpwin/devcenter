import {Component, OnInit} from '@angular/core';

import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'cdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

    ClassicEditor.create(document.querySelector('.step'), {
      toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList' ],
      balloonToolbar: [ 'bold', 'italic', '|', 'undo', 'redo' ],
      heading: {
        options: [
          { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
      }
    });
  }

  initAuthorization() {
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
