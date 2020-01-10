import {Component, OnInit} from '@angular/core';

import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import {CKEditor5} from "@ckeditor/ckeditor5-angular";

import { AngularFireStorage } from '@angular/fire/storage';
import {HttpClient} from "@angular/common/http";

export class MyUploadAdapter {
  constructor(public loader, private _storage: AngularFireStorage) {
  }

  upload() {
    return this.loader.file.then(file => new Promise(( resolve, reject ) =>{
      file.arrayBuffer().then(b =>
      {
        const fileName = 'examp.jpeg';

        const uploadTask = this._storage.ref(fileName).put(b, {contentType: 'image/jpeg'});

        uploadTask.then(snapshot => {

          snapshot.ref.getDownloadURL().then(url => {
            resolve({
              default: url
            });
          })
        });


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

  constructor(private _storage: AngularFireStorage, private _httpClient: HttpClient) {
  }

  public Editor = BalloonEditor;

  public Config = {
  };

  public model = {
    editorData: '<p>Loading!</p>'
  };

  public onEditorReady(editor: CKEditor5.Editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = ( loader ) => {
      return new MyUploadAdapter( loader, this._storage );
    };
  }

  async ngOnInit() {
    const url = await this._storage.ref('step.txt').getDownloadURL().toPromise();

    const text = await this._httpClient.get(url, {responseType: 'text'}).toPromise();

    this.model.editorData = text;
  }

  saveStep() {
    // console.log(this.model.editorData);
    this._storage.ref('step.txt').putString(btoa(this.model.editorData), 'base64', {contentType: 'text/html'});
  }
}
