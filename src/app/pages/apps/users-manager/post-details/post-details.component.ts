import { Component } from '@angular/core';
import { ProfileSidMenuComponent } from '../../../../elements/short-cods/apps/profile-sid-menu/profile-sid-menu.component';
import { ProfileHeadComponent } from '../../../../features/app-profile-1/components/profile-head/profile-head.component';
import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    ProfileHeadComponent,
    BreadcrumbComponent,
    ProfileSidMenuComponent
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  breadcrumbList = {
    breadcrumb_path: 'App',
    currentURL: 'Post Details',
  }
  profileDetailArray = {
    name: 'Mitchell C. Shay',
    email: 'hello@email.com'
  }
}
