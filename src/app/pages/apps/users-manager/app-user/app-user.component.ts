
import { RouterLink } from '@angular/router';
import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule, Sort } from '@angular/material/sort';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../../../elements/pagination/pagination.component';

export interface Dessert {
  beeg_image: string,
  userImage: string,
  userName: string,
  userEmail: string,
  userPosition: string,
  date: string,
  last_day: string,
  posts:number,
  followers:number,
  following:number,
  status?:Boolean
}

@Component({
  selector: 'app-app-user',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    RouterLink,
    MatSortModule,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './app-user.component.html',
  styleUrl: './app-user.component.css'
})
export class AppUserComponent {
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Apps',
    currentURL: 'User',
  }
  offcanvasExample: boolean = false;
  toggleExample() {
    this.offcanvasExample = !this.offcanvasExample;
  }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  active = 1;
  page: any = 1;
  totalRows: number = 10;
  totalPage: any = 0;
  allData: any = [];
  boxActive: Boolean = false;

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }
  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  desserts: Dessert[] = [
    {
      beeg_image: 'assets/images/user1.jpg',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Niam Risher',
      userEmail: 'demo@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 175,
      followers: 50,
      following: 30,
      status: true
    },
    {
      beeg_image: 'assets/images/profile/friends/f1.jpg',
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'John Risher',
      userEmail: 'jr@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Friday',
      posts: 170,
      followers: 360,
      following: 45,
      status: true
    },
    {
      beeg_image: 'assets/images/profile/friends/f2.jpg',
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'John Ethan',
      userEmail: 'jr@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 250,
      followers: 36,
      following: 450,
      status: false
    },
    {
      beeg_image: 'assets/images/profile/friends/f3.jpg',
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Michael Jose',
      userEmail: 'mj@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 185,
      followers: 10,
      following: 70,
      status: false
    },
    {
      beeg_image: 'assets/images/profile/friends/f4.jpg',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'William James',
      userEmail: 'mj@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 175,
      followers: 50,
      following: 30,
      status: true
    },
    {
      beeg_image: 'assets/images/profile/friends/f1.jpg',
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Aman Risher',
      userEmail: 'jr@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Friday',
      posts: 180,
      followers: 60,
      following: 99,
      status: true
    },
    {
      beeg_image: 'assets/images/user1.jpg',
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Smith Johnson',
      userEmail: 'jr@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 185,
      followers: 10,
      following: 70,
      status: true
    },
    {
      beeg_image: 'assets/images/user1.jpg',
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Brown Johnson',
      userEmail: 'mj@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 242,
      followers: 66,
      following: 80,
      status: false
    },
    {
      beeg_image: 'assets/images/profile/friends/f4.jpg',
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'John Risher',
      userEmail: 'jr@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Friday',
      posts: 180,
      followers: 60,
      following: 99,
      status: true
    },
    {
      beeg_image: 'assets/images/profile/friends/f2.jpg',
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'John Ethan',
      userEmail: 'jr@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 170,
      followers: 360,
      following: 45,
      status: false
    },
    {
      beeg_image: 'assets/images/profile/friends/f3.jpg',
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Michael Jose',
      userEmail: 'mj@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 250,
      followers: 36,
      following: 450,
      status: true
    },
    {
      beeg_image: 'assets/images/user1.jpg',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'William James',
      userEmail: 'mj@gmail.com',
      userPosition: 'Software Engineer',
      date: '12 Jan 2024',
      last_day: 'Monday',
      posts: 175,
      followers: 50,
      following: 30,
      status: false
    }
  ];

  orderData: Dessert[];

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.orderData = data;
      return;
    }

    this.orderData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'userName': return compare(a.userName, b.userName, isAsc);
        case 'userEmail': return compare(a.userEmail, b.userEmail, isAsc);
        case 'userPosition': return compare(a.userPosition, b.userPosition, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'last_day': return compare(a.last_day, b.last_day, isAsc);
        default: return 0;
      }
    });
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
  }

  pageChange(e: any) {    //  Page Change funcation   ---------
    this.page = e;
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  paginator(items: any, current_page: any, per_page_items: any) {
    let page = current_page || 1,
      per_page = per_page_items || 10,
      offset = (page - 1) * per_page,

      paginatedItems = items.slice(offset).slice(0, per_page_items),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: (total_pages > page) ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems
    };
  }

  checkUncheckAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}