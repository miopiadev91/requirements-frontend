import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AikitHeadComponent } from '../../../elements/short-cods/aikit/aikit-head/aikit-head.component';

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AikitHeadComponent,
  ],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css'
})
export class ImportComponent {
  breadcrumbList = {
    breadcrumb_path: 'AIKit',
    currentURL: 'Export/Import Settings',
  }

  headData = {
    alert_msg: 'This is a demo of AIKit plugin made for you to test the experience of using the plugin.',
    alert_desc: null
  }
}
