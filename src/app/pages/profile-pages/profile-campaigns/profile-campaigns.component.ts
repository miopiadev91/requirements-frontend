import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileOverviewHeadComponent } from '../../../elements/short-cods/profile-account/profile-overview-head/profile-overview-head.component';

@Component({
  selector: 'app-profile-campaigns',
  standalone: true,
  imports: [
    RouterLink,
    ProfileOverviewHeadComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './profile-campaigns.component.html',
  styleUrl: './profile-campaigns.component.css'
})
export class ProfileCampaignsComponent {
  breadcrumbList = {
    breadcrumb_path: 'Profile',
    currentURL: 'Campaigns',
  }
}
