import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileOverviewHeadComponent } from '../../../elements/short-cods/profile-account/profile-overview-head/profile-overview-head.component';
import { RouterLink } from '@angular/router';

interface type {
  url: string,
  image: string,
  title: string,
  desc: string,
  team: {}[],
  project_complete: number,
  due_date: string,
  status: string
}

@Component({
  selector: 'app-profile-projects',
  standalone: true,
  imports: [
    RouterLink,
    ProfileOverviewHeadComponent,
    BreadcrumbComponent
  ],
  templateUrl: './profile-projects.component.html',
  styleUrl: './profile-projects.component.css'
})
export class ProfileProjectsComponent {
  breadcrumbList = {
    breadcrumb_path: 'Profile',
    currentURL: 'Projects',
  }

  ProjectsList: type[] = [
    {
      url: '/admin/profile/projects-details',
      image: 'assets/images/logo/figma.png',
      title: 'Figma Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      team: ['assets/images/avatar/avatar8.jpg', 'assets/images/avatar/avatar6.jpg', 'assets/images/avatar/avatar4.jpg', 'assets/images/avatar/avatar2.jpg'],
      project_complete: 60,
      due_date: '2024-06-02',
      status: 'success'
    },
    {
      url: '/admin/profile/projects-details',
      image: 'assets/images/logo/github.png',
      title: 'Github Repository',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      team: ['assets/images/avatar/avatar1.jpg', 'assets/images/avatar/avatar3.jpg', 'assets/images/avatar/avatar5.jpg', 'assets/images/avatar/avatar7.jpg'],
      project_complete: 69,
      due_date: '2024-06-02',
      status: 'purple'
    },
    {
      url: '/admin/profile/projects-details',
      image: 'assets/images/logo/spotify.png',
      title: 'Music App',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      team: ['assets/images/avatar/avatar8.jpg', 'assets/images/avatar/avatar6.jpg', 'assets/images/avatar/avatar4.jpg', 'assets/images/avatar/avatar2.jpg'],
      project_complete: 60,
      due_date: '2024-06-02',
      status: 'warning'
    },
    {
      url: '/admin/profile/projects-details',
      image: 'assets/images/logo/twitch.png',
      title: 'Banking System',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      team: ['assets/images/avatar/avatar1.jpg', 'assets/images/avatar/avatar3.jpg', 'assets/images/avatar/avatar5.jpg', 'assets/images/avatar/avatar7.jpg'],
      project_complete: 92,
      due_date: '2024-06-02',
      status: 'danger'
    },
    {
      url: '/admin/profile/projects-details',
      image: 'assets/images/logo/dropbox.png',
      title: 'Cloud Store',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      team: ['assets/images/avatar/avatar8.jpg', 'assets/images/avatar/avatar6.jpg', 'assets/images/avatar/avatar4.jpg', 'assets/images/avatar/avatar2.jpg'],
      project_complete: 70,
      due_date: '2024-06-02',
      status: 'warning'
    },
    {
      url: '/admin/profile/projects-details',
      image: 'assets/images/logo/html.png',
      title: 'HTML Design',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      team: ['assets/images/avatar/avatar8.jpg', 'assets/images/avatar/avatar6.jpg', 'assets/images/avatar/avatar4.jpg', 'assets/images/avatar/avatar2.jpg'],
      project_complete: 68,
      due_date: '2024-06-02',
      status: 'danger'
    },
    {
      url: '/admin/profile/projects-details',
      image: 'assets/images/logo/amazon.png',
      title: 'eCommerce Theme',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      team: ['assets/images/avatar/avatar8.jpg', 'assets/images/avatar/avatar6.jpg', 'assets/images/avatar/avatar4.jpg', 'assets/images/avatar/avatar2.jpg'],
      project_complete: 86,
      due_date: '2024-06-02',
      status: 'success'
    },
    {
      url: '/admin/profile/projects-details',
      image: 'assets/images/logo/slack.png',
      title: 'Music App',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      team: ['assets/images/avatar/avatar8.jpg', 'assets/images/avatar/avatar6.jpg', 'assets/images/avatar/avatar4.jpg', 'assets/images/avatar/avatar2.jpg'],
      project_complete: 65,
      due_date: '2024-06-02',
      status: 'warning'
    }
  ]
}
