import {Component, OnInit} from '@angular/core';

import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import {CKEditor5} from "@ckeditor/ckeditor5-angular";

export class MyUploadAdapter {
  constructor(public loader) {
  }

  upload() {
    return this.loader.file.then(file => new Promise(( resolve, reject ) =>{
      file.arrayBuffer().then(b =>
      {
        console.log(b);
      });
    }))
  }

  abort() {

  }
}

@Component({
  selector: 'cdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public Editor = BalloonEditor;

  public Config = {
  };

  public onEditorReady(editor: CKEditor5.Editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = ( loader ) => {
      return new MyUploadAdapter( loader );
    };
  }

  constructor() {

  }

  ngOnInit(): void {

  }
}
