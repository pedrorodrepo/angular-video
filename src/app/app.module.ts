import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgIf,
    MatCardModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
