import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';
import { MyToDoListComponent } from '../../../elements/short-cods/my-to-do-list/my-to-do-list.component';
interface typeToDo {
  title: string,
  date: string,
  status?: string,
  statusText?: string
}
@Component({
  selector: 'app-account-activity',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    AccountOverviewHeadComponent,
    MyToDoListComponent
  ],
  templateUrl: './account-activity.component.html',
  styleUrl: './account-activity.component.css'
})
export class AccountActivityComponent {
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Activity',
  }
  to_do_list: typeToDo[] = [
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00',
      status: 'warning',
      statusText: `Latest to do's`
    },
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00',
      status: 'success',
      statusText: `Latest finished to do's`
    },
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00',
      status: 'danger',
      statusText: `Latest to do's`
    },
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00'
    },
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00'
    }
  ]
}
