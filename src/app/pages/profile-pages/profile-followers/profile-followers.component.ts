import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileOverviewHeadComponent } from '../../../elements/short-cods/profile-account/profile-overview-head/profile-overview-head.component';

interface type {
  image?: string,
  name: string,
  desc: string,
  avg_deal: string,
  deals: string,
  isFollowActive: boolean
}

@Component({
  selector: 'app-profile-followers',
  standalone: true,
  imports: [
    RouterLink,
    ProfileOverviewHeadComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './profile-followers.component.html',
  styleUrl: './profile-followers.component.css'
})
export class ProfileFollowersComponent {
  breadcrumbList = {
    breadcrumb_path: 'Profile',
    currentURL: 'Followers',
  }


  toggleFollow(index: number) {
    this.UserList[index].isFollowActive = !this.UserList[index].isFollowActive;
  }

  UserList: type[] = [
    {
      image: 'assets/images/avatar/6.jpg',
      name: 'Lawrence',
      desc: 'Art Director at DexignZone.',
      avg_deal: '$12,500.00',
      deals: '$150,500.00',
      isFollowActive: true
    },
    {
      name: 'Sean Bean',
      desc: 'Art Director at DexignZone.',
      avg_deal: '$12,500.00',
      deals: '$150,500.00',
      isFollowActive: false
    },
    {
      image: 'assets/images/avatar/5.jpg',
      name: 'Alan Johnson',
      desc: 'Art Director at DexignZone.',
      avg_deal: '$12,500.00',
      deals: '$150,500.00',
      isFollowActive: false
    },
    {
      name: 'Peter Marcus',
      desc: 'Web Designer at DexignZone.',
      avg_deal: '$12,500.00',
      deals: '$150,500.00',
      isFollowActive: false
    },
    {
      image: 'assets/images/avatar/6.jpg',
      name: 'Harvey',
      desc: 'PHP Developer at DexignZone.',
      avg_deal: '$12,500.00',
      deals: '$150,500.00',
      isFollowActive: false
    },
    {
      image: 'assets/images/avatar/5.jpg',
      name: 'Johnson',
      desc: 'React Developer at DexignZone.',
      avg_deal: '$12,500.00',
      deals: '$150,500.00',
      isFollowActive: false
    },
    {
      name: 'Marshall',
      desc: 'Art Director at DexignZone.',
      avg_deal: '$12,500.00',
      deals: '$150,500.00',
      isFollowActive: false
    },
    {
      name: 'McDonald',
      desc: 'React Native Developer at DexignZone.',
      avg_deal: '$12,500.00',
      deals: '$150,500.00',
      isFollowActive: false
    }
  ]
}
