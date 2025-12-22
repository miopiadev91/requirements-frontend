import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { EmailLeftBodyComponent } from '../../../../elements/short-cods/apps/email-left-body/email-left-body.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbComponent,
    EmailLeftBodyComponent
  ],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.css'
})
export class ComposeComponent {
  isVisited:boolean = false;

  breadcrumbList = {
    subTitle: 'Email',
    breadcrumb_path: 'Email',
    currentURL: 'Compose',
  }

  inboxSidebar() {
    this.isVisited = !this.isVisited;
  }
}
