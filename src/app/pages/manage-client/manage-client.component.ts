import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../elements/pagination/pagination.component';

export interface Dessert {
  image: string;
  name: string;
  user_name: string;
  contact: string;
  gender: string;
  location: string;
  status: string
}

@Component({
  selector: 'app-manage-client',
  standalone: true,
  imports: [
    MatSortModule,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './manage-client.component.html',
  styleUrl: './manage-client.component.css'
})
export class ManageClientComponent {
  breadcrumbList = {
    title: 'Manage Client',
    breadcrumb_path: 'Home',
    currentURL: 'Manage Client',
  }

  active = 1;
  page: any = 1;
  totalRows: number = 10;
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
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Ricky Antony',
      user_name: 'ricky.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'Uk',
      status: 'Inactive'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'John Antony',
      user_name: 'john.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'Usa',
      status: 'Inactive'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Ricky Antony',
      user_name: 'ricky.antony',
      contact: '+91 123 456 7890',
      gender: '	Female',
      location: 'Uk',
      status: 'Active'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Ricky Antony',
      user_name: 'ricky.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'Uk',
      status: 'Inactive'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'John Antony',
      user_name: 'john.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'Uk',
      status: 'Inactive'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'John Antony',
      user_name: 'john.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'USA',
      status: 'Inactive'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Ricky Antony',
      user_name: 'ricky.antony',
      contact: '+91 123 456 7890',
      gender: '	Female',
      location: 'Uk',
      status: 'Active'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'John Antony',
      user_name: 'john.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'Uk',
      status: 'Inactive'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Ricky Antony',
      user_name: 'ricky.antony',
      contact: '+91 123 456 7890',
      gender: '	Female',
      location: 'USA',
      status: 'Active'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Ricky Antony',
      user_name: 'ricky.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'Uk',
      status: 'Inactive'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'John Antony',
      user_name: 'john.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'Uk',
      status: 'Inactive'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'John Antony',
      user_name: 'john.antony',
      contact: '+91 123 456 7890',
      gender: 'Male',
      location: 'USA',
      status: 'Inactive'
    },
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
        case 'user_name': return compare(a.user_name, b.user_name, isAsc);
        case 'contact': return compare(a.contact, b.contact, isAsc);
        case 'gender': return compare(a.gender, b.gender, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
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
