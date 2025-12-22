import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-email-add',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    CKEditorModule,
    BreadcrumbComponent
  ],
  templateUrl: './email-add.component.html',
  styleUrl: './email-add.component.css'
})
export class EmailAddComponent {

  breadcrumbList = {
    breadcrumb_path: 'CMS',
    currentURL: 'Add Email',
  }

  public Editor = ClassicEditor;

  activeToggleArray = [1]
  dropicon(id:any){
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

}
