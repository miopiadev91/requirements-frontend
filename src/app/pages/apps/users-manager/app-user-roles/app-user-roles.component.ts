import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { MatSortModule, Sort } from '@angular/material/sort';
import { PaginationComponent } from '../../../../elements/pagination/pagination.component';

export interface Dessert {
  image: string,
  name: string;
  email: string;
  date: string;
  last_active: string;
}


@Component({
  selector: 'app-app-user-roles',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatSortModule,
    PaginationComponent
  ],
  templateUrl: './app-user-roles.component.html',
  styleUrl: './app-user-roles.component.css'
})
export class AppUserRolesComponent {
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Apps',
    currentURL: 'Roles Listing',
  }
  offcanvasExample: boolean = false;
  toggleExample() {
    this.offcanvasExample = !this.offcanvasExample;
  }

  active = 1;
  page: any = 1;
  totalRows: number = 5;
  totalPage: any = 0;
  allData: any = [];

  constructor() {
    this.orderData = this.desserts.slice();
  }
  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  desserts: Dessert[] = [
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'Abdullah Risher',
      email: 'demo@gmail.com',
      date: '22 March 2024',
      last_active: 'Monday'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Bongani Femi',
      email: 'demo@gmail.com',
      date: '28 February 2024',
      last_active: 'Tuesday'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Hakim Joy',
      email: 'demo@gmail.com',
      date: '22 March 2024',
      last_active: 'Tuesday'
    },
    {
      image: 'assets/images/profile/friends/f1.jpg',
      name: 'Lolonyo Chinyelu',
      email: 'demo@gmail.com',
      date: '22 March 2024',
      last_active: 'May'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Malik Oba',
      email: 'demo@gmail.com',
      date: '28 February 2024',
      last_active: 'Tuesday'
    },
    {
      image: 'assets/images/profile/friends/f1.jpg',
      name: 'Darius Addo',
      email: 'demo@gmail.com',
      date: '22 March 2024',
      last_active: 'Tuesday'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Bongani Femi',
      email: 'demo@gmail.com',
      date: '28 February 2024',
      last_active: 'Tuesday'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Hakim Joy',
      email: 'demo@gmail.com',
      date: '22 March 2024',
      last_active: 'Tuesday'
    },
    {
      image: 'assets/images/profile/friends/f1.jpg',
      name: 'Lolonyo Chinyelu',
      email: 'demo@gmail.com',
      date: '22 March 2024',
      last_active: 'May'
    },
    {
      image: 'assets/images/profile/friends/f1.jpg',
      name: 'Lolonyo Chinyelu',
      email: 'demo@gmail.com',
      date: '22 March 2024',
      last_active: 'May'
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
        case 'name': return compare(a.name, b.name, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'last_active': return compare(a.last_active, b.last_active, isAsc);
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
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

