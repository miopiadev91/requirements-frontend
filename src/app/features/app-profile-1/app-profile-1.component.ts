import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { ProfileHeadComponent } from './components/profile-head/profile-head.component';
import { ProfileTabComponent } from './components/profile-tab/profile-tab.component';

@Component({
  selector: 'app-app-profile-1',
  standalone: true,
  imports: [
    ProfileTabComponent,
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
