import { Component, TemplateRef } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AikitHeadComponent } from '../../../elements/short-cods/aikit/aikit-head/aikit-head.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    AikitHeadComponent,
    MatSliderModule
  ],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent {

  breadcrumbList = {
    breadcrumb_path: 'AIKit',
    currentURL: 'AI Menu Prompts',
  }
  headData = {
    alert_msg: 'This is a demo of AIKit plugin made for you to test the experience of using the plugin.',
    alert_desc: 'Here you can edit or add new prompts that would appear in the "AI" dropdown menu. You can also reorder the prompts by dragging and dropping them in the order you wish. There are lots of online resources that could help and give you tips & trick on how to best edit prompts. Simply search YouTube/Google for "Prompt engineering" to gain more knowledge on the topic. Add PromptReset Prompts'
  }

  prompt_language = ['English', 'Deutsch', 'Français', 'Español', 'Italiano', 'Português', 'Dutch', 'Polski', 'Русский', '日本語中文', 'Português', 'Brasileiro',
    'Türkçe', 'العربية', 'Việt', 'हिन्दी', 'Bahasa', '한국어', 'Български']

  constructor(private modalService: NgbModal) { }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
  trackByFn(index: number, item: string): any {
    return `${item}-${index}`; // Combine the item value with the index to ensure uniqueness
  }
}
