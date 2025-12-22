import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileOverviewHeadComponent } from '../../../elements/short-cods/profile-account/profile-overview-head/profile-overview-head.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyToDoListComponent } from '../../../elements/short-cods/my-to-do-list/my-to-do-list.component';

interface typeToDo {
  title: string,
  date: string,
  status?: string,
  statusText?: string
}
@Component({
  selector: 'app-profile-activity',
  standalone: true,
  imports: [
    RouterLink,
    NgbModule,
    ProfileOverviewHeadComponent,
    BreadcrumbComponent,
    MyToDoListComponent
  ],
  templateUrl: './profile-activity.component.html',
  styleUrl: './profile-activity.component.css'
})
export class ProfileActivityComponent {
  active = 1;
  breadcrumbList = {
    breadcrumb_path: 'Profile',
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
