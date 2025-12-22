import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../../../elements/pagination/pagination.component';

export interface Dessert {
  reference: string,
  product: string;
  status: string;
  date: string;
  amount: number;
}

@Component({
  selector: 'app-customer-profile',
  standalone: true,
  imports: [
    MatSortModule,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent {
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Apps',
    currentURL: 'Customer Profile',
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
      reference: '#552145252',
      product: 'Zoom video conferencing',
      status: 'Pending',
      date: '12 February 2024',
      amount: 900
    },
    {
      reference: '#552145252',
      product: 'Salesforce CRM',
      status: 'Inprogress',
      date: '12 February 2024',
      amount: 500
    },
    {
      reference: '#552145252',
      product: 'Slack collaboration platform',
      status: 'Inprogress',
      date: '12 February 2024',
      amount: 850
    },
    {
      reference: '#552145252',
      product: 'Google Chrome',
      status: 'Pending',
      date: '12 February 2024',
      amount: 1200
    },
    {
      reference: '#552145252',
      product: 'Salesforce CRM',
      status: 'Completed',
      date: '12 February 2024',
      amount: 500
    },
    {
      reference: '#552145252',
      product: 'Slack collaboration platform',
      status: 'Inprogress',
      date: '12 February 2024',
      amount: 850
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
        case 'reference': return compare(a.reference, b.reference, isAsc);
        case 'product': return compare(a.product, b.product, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'amount': return compare(a.amount, b.amount, isAsc);
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
