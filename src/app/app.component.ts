import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public sanitizer: DomSanitizer) {}

  valid = true;
  url: any;
  src: any = null;
  format: any;
  selectedFile: any;
  height: any = 300;

  onSelectFile(event: any) {
    this.valid = true;
    const file = (this.selectedFile =
      event.target.files && event.target.files[0]);

    if (file) {
      var reader = new FileReader();

      if (file.type.indexOf('image') > -1) {
        reader.readAsDataURL(file);
        this.format = 'image';
      } else if (file.type.indexOf('video') > -1) {
        reader.readAsDataURL(file);
        this.format = 'video';
      } else if (file.type.indexOf('pdf') > -1) {
        reader.readAsArrayBuffer(file);

        this.format = 'pdf';
      } else {
        this.valid = false;
      }

      reader.onload = (event) => {
        this.url = (<any>event.target).result;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      };
    }
  }
}
