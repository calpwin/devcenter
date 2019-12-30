import {Component, OnInit} from '@angular/core';

import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import {CKEditor5} from "@ckeditor/ckeditor5-angular";

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
      uploadUrl: '/'
    }
  };

  public onEditorReady(editor: CKEditor5.Editor) {
    console.log(editor.plugins._availablePlugins.get('CKFinder').pluginName);
  }

  constructor() {

  }

  ngOnInit(): void {

  }
}
