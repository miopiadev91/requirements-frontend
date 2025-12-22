import { Component } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CKEditorModule, BreadcrumbComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  public Editor = ClassicEditor;

  breadcrumbList = {
    subTitle: 'Your business dashboard template',
    breadcrumb_path: 'Form',
    currentURL: 'CkEditor',
  }
}
