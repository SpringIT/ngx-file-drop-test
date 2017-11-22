import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule
    , FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
