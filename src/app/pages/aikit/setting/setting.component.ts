import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AikitHeadComponent } from '../../../elements/short-cods/aikit/aikit-head/aikit-head.component';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    TagInputModule,
    BreadcrumbComponent,
    AikitHeadComponent,
    Select2Component
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {
  value = 20;
  items: string[] = ['Watercolor','Vector Art','Portrait','Pencil Drawing','Digital Painting','Abstract','Oil Painting','Cartoon','Black And White']; 
  breadcrumbList = {
    breadcrumb_path: 'AIKit',
    currentURL: 'Settings',
  }

  headData = {
    alert_msg: 'This is a demo of AIKit plugin made for you to test the experience of using the plugin.',
    alert_desc: null
  }

  select2_openAI = [
    {
      name: 'gpt-3.5-turbo',
    },
    {
      name: 'gpt-4.5-turbo',
    }
  ];
}
