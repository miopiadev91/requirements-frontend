import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { Select2Component } from '../../../plugins/select2/select2.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    Select2Component,
    AccountOverviewHeadComponent
  ],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent {
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Settings',
  }

  selectStatus = [
    {
      name: 'Please select',
    },
    {
      name: 'India',
    },
    {
      name: 'China',
    },
    {
      name: 'USA',
    }
  ];
}
