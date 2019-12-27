import {Component, OnInit} from '@angular/core';

import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

@Component({
  selector: 'cdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public Editor = BalloonEditor;

  constructor() {

  }

  ngOnInit(): void {
  }
}
