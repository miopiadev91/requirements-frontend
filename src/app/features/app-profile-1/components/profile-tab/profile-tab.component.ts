import { Component, inject, signal, TemplateRef } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Component } from '../../../../plugins/select2/select2.component';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../features/auth/services/auth.service';

interface type {
  img: string,
  title: string,
  route: string,
  desc: string
}
@Component({
  selector: 'app-profile-tab',
  standalone: true,
  imports: [NgbModule, Select2Component, NgClass, NgClass],
  templateUrl: './profile-tab.component.html',
  styleUrl: './profile-tab.component.css'
})
export class ProfileTabComponent {
  private authService = inject(AuthService);

  isLoading = signal(false);
  userProfile = signal<any>(null);

  active = 2;
  hide: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.userProfile.set(this.authService.currentUser());

    this.isLoading.set(true);
    this.authService.getUserProfile().subscribe({
      next: (profile) => {
        this.userProfile.set(profile);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false)
      }
    })
  }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  show_pass() {
    this.hide = !this.hide;
  }

  select2Data = [
    {
      name: 'Choose...',
    },
    {
      name: 'Option 1',
    },
    {
      name: 'Option 2',
    },
    {
      name: 'Option 3',
    },
  ];

  uploadPost: type[] = [
    {
      img: 'assets/images/profile/8.jpg',
      title: 'Collection of textile samples lay spread',
      route: '/admin/post-details',
      desc: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
    },
    {
      img: 'assets/images/profile/9.jpg',
      title: 'Collection of textile samples lay spread',
      route: '/admin/post-details',
      desc: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
    },
    {
      img: 'assets/images/profile/8.jpg',
      title: 'Collection of textile samples lay spread',
      route: '/admin/post-details',
      desc: 'A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.',
    }
  ]
}
