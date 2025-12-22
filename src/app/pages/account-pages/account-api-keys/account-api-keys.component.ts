import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';

interface type {
  label: string,
  API_keys: string,
  created: string,
  status: string
}
@Component({
  selector: 'app-account-api-keys',
  standalone: true,
  imports: [
    NgbModule,
    CurrencyPipe,
    BreadcrumbComponent,
    AccountOverviewHeadComponent,
  ],
  templateUrl: './account-api-keys.component.html',
  styleUrl: './account-api-keys.component.css'
})
export class AccountApiKeysComponent {
  active = 1;
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Api Keys',
  }

  data: type[] = [
    {
      label: 'none set',
      API_keys: 'hhhhhh5782516nsdzjvn54',
      created: 'Nov 01, 2024',
      status: 'Active'
    },
    {
      label: 'Navitare',
      API_keys: 'hhhhhh5782516nsdzjvn54',
      created: 'Sep 27, 2024',
      status: 'Review'
    },
    {
      label: 'Docs API Key',
      API_keys: 'hhhhhh5782516nsdzjvn54',
      created: 'Jul 01, 2024',
      status: 'Inactive'
    },
    {
      label: 'Identity Key',
      API_keys: 'hhhhhh5782516nsdzjvn54',
      created: 'May 27, 2024',
      status: 'Active'
    },
    {
      label: 'none set',
      API_keys: 'hhhhhh5782516nsdzjvn54',
      created: 'Nov 01, 2024',
      status: 'Active'
    },
    {
      label: 'Navitare',
      API_keys: 'hhhhhh5782516nsdzjvn54',
      created: 'Sep 27, 2024',
      status: 'Review'
    },
    {
      label: 'Docs API Key',
      API_keys: 'hhhhhh5782516nsdzjvn54',
      created: 'Jul 01, 2024',
      status: 'Inactive'
    }
  ]
}
