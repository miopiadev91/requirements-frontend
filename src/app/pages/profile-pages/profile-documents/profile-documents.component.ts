import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileOverviewHeadComponent } from '../../../elements/short-cods/profile-account/profile-overview-head/profile-overview-head.component';
import { SubTitle } from 'chart.js';

interface type {
  image: string,
  title: string,
  SubTitle: string
}
@Component({
  selector: 'app-profile-documents',
  standalone: true,
  imports: [
    RouterLink,
    ProfileOverviewHeadComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './profile-documents.component.html',
  styleUrl: './profile-documents.component.css'
})
export class ProfileDocumentsComponent {
  breadcrumbList = {
    breadcrumb_path: 'Profile',
    currentURL: 'Documents',
  }
  DocumentsList:type[] = [
    {
      image: 'assets/images/files/folder.png',
      title: 'CRUD Invoices',
      SubTitle: '12 files'
    },
    {
      image: 'assets/images/files/folder.png',
      title: 'Tower Hill Docs',
      SubTitle: '17 files'
    },
    {
      image: 'assets/images/files/folder.png',
      title: 'Mivy App',
      SubTitle: '12 files'
    },
    {
      image: 'assets/images/files/folder.png',
      title: 'Leaf CRM API Co..',
      SubTitle: '21 files'
    },
    {
      image: 'assets/images/files/csv.png',
      title: 'Tower Hill bilboa..',
      SubTitle: '34 days ago'
    },
    {
      image: 'assets/images/files/css.png',
      title: 'Orders backup',
      SubTitle: '03 days ago'
    },
    {
      image: 'assets/images/files/pdf.png',
      title: 'Avionica Tech.',
      SubTitle: '04 days ago'
    },
    {
      image: 'assets/images/files/html.png',
      title: '9 Degree CRUD.',
      SubTitle: '10 days ago'
    },
    {
      image: 'assets/images/files/ppt.png',
      title: 'User CRUD Styles',
      SubTitle: '78 days ago'
    },
    {
      image: 'assets/images/files/mp3.png',
      title: 'Craft Logo',
      SubTitle: '65 days ago'
    }
  ]
}
