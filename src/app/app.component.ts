import {Component, OnInit} from '@angular/core';

import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

@Component({
  selector: 'cdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public Editor = BalloonEditor;
  public Config = {
    ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command.
      uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
    }
  };

  constructor() {

  }

  ngOnInit(): void {
    this.Editor
  }
}
