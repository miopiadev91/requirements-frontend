import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { CurrencyPipe } from '@angular/common';
import { PaginationComponent } from '../../elements/pagination/pagination.component';

export interface Dessert {
  account_title: string,
  amount: number;
  account_no: number;
  branch_code: number;
  branch_name: string;
}

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    MatSortModule,
    CurrencyPipe,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent {
  breadcrumbList = {
    title: 'Finance',
    breadcrumb_path: 'Home',
    currentURL: 'Finance',
  }

  active = 1;
  page: any = 1;
  totalRows: number = 8;
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
      account_title: 'Saving',
      amount: 500,
      account_no: 1234500000000,
      branch_code: 1234,
      branch_name: 'Bank Of Uk'
    },
    {
      account_title: 'Salary',
      amount: 750,
      account_no: 1234500000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    }, 
    {
      account_title: 'Fixed deposit',
      amount: 500,
      account_no: 678900000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    },
    {
      account_title: 'Recurring deposit',
      amount: 6000,
      account_no: 1234500000000,
      branch_code: 5678,
      branch_name: 'Bank Of India'
    },
    {
      account_title: 'Saving',
      amount: 400,
      account_no: 1234500000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    },
    {
      account_title: 'Fixed deposit',
      amount: 500,
      account_no: 678900000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    },
    {
      account_title: 'Saving',
      amount: 500,
      account_no: 1234500000000,
      branch_code: 1234,
      branch_name: 'Bank Of Uk'
    },
    {
      account_title: 'Salary',
      amount: 750,
      account_no: 1234500000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    },
    {
      account_title: 'Recurring deposit',
      amount: 6000,
      account_no: 1234500000000,
      branch_code: 5678,
      branch_name: 'Bank Of India'
    },
    {
      account_title: 'Saving',
      amount: 400,
      account_no: 1234500000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    },
    {
      account_title: 'Salary',
      amount: 750,
      account_no: 1234500000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    }, 
    {
      account_title: 'Fixed deposit',
      amount: 500,
      account_no: 678900000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    },
    {
      account_title: 'Recurring deposit',
      amount: 6000,
      account_no: 1234500000000,
      branch_code: 5678,
      branch_name: 'Bank Of India'
    },
    {
      account_title: 'Saving',
      amount: 400,
      account_no: 1234500000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
    },
    {
      account_title: 'Fixed deposit',
      amount: 500,
      account_no: 678900000000,
      branch_code: 1234,
      branch_name: 'Bank Of Lundon'
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
        case 'account_title': return compare(a.account_title, b.account_title, isAsc);
        case 'amount': return compare(a.amount, b.amount, isAsc);
        case 'account_no': return compare(a.account_no, b.account_no, isAsc);
        case 'branch_code': return compare(a.branch_code, b.branch_code, isAsc);
        case 'branch_name': return compare(a.branch_name, b.branch_name, isAsc);
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
