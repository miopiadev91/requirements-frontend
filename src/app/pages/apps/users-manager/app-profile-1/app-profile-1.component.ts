import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { ProfileHeadComponent } from '../../../../elements/short-cods/apps/profile-head/profile-head.component';
import { ProfileSidMenuComponent } from '../../../../elements/short-cods/apps/profile-sid-menu/profile-sid-menu.component';
import { ProfileTabComponent } from '../../../../elements/short-cods/apps/profile-tab/profile-tab.component';

@Component({
  selector: 'app-app-profile-1',
  standalone: true,
  imports: [
    ProfileTabComponent,
    ProfileSidMenuComponent,
    BreadcrumbComponent,
    ProfileHeadComponent
  ],
  templateUrl: './app-profile-1.component.html',
  styleUrl: './app-profile-1.component.css'
})
export class AppProfile1Component {
  breadcrumbList = {
    title: 'Hi, welcome back!',
    subTitle: 'Your business dashboard template',
    breadcrumb_path: 'Apps',
    currentURL: 'Profile',
  }
  profileDetailArray = {
    name:'Mitchell C. Shay',
    email: 'info@example.com'
  }
}
