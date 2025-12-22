import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AikitHeadComponent } from '../../../elements/short-cods/aikit/aikit-head/aikit-head.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';
import { Select2Component } from '../../../plugins/select2/select2.component';

@Component({
  selector: 'app-auto-writer',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AikitHeadComponent,
    DropdownComponent,
    Select2Component
  ],
  templateUrl: './auto-writer.component.html',
  styleUrl: './auto-writer.component.css'
})
export class AutoWriterComponent {
  breadcrumbList = {
    breadcrumb_path: 'AIKit',
    currentURL: 'Auto Writer',
  }

  headData = {
    alert_msg:'This is a demo of AIKit plugin made for you to test the experience of using the plugin. Text & images/ generated in this demo are dummy. In real life, AIKit will call OpenAI API and generate relevant text and images/ based on your prompts.',
    alert_desc:'AIKit Auto Writer is a tool helps you write drafts quickly, but please review and edit before publishing for best results. This is not a substitute for human editing, but a drafting aid. Happy writing!'
  }
  
  dropdown_item = {
    select: 'England',
    value: ['England', 'India', 'UAE'],
    image:['assets/images/svg/england.svg', 'assets/images/svg/india.svg', 'assets/images/svg/united-arab-emirates.svg']
  }

  select2_post = [
    {
      name: 'Post',
    },
    {
      name: 'Product',
    }
  ];
  select2_category = [
    {
      name: 'Uncategorized',
    },
    {
      name: 'Categorized',
    }
  ];
  select2_status = [
    {
      name: 'Draft',
    },
    {
      name: 'Categorized',
    }
  ];
}
