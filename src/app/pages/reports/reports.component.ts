import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { CurrencyPipe } from '@angular/common';
import { PaginationComponent } from '../../elements/pagination/pagination.component';

export interface Dessert {
  invoice: string,
  customer: string,
  date: string,
  due_date: string,
  amount: number;
  discount: number;
  amount_open: number;
  adjustment: number;
  status: string
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    MatSortModule,
    CurrencyPipe,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  breadcrumbList = {
    title: 'Generated Report',
    breadcrumb_path: 'Home',
    currentURL: 'Report',
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
      invoice: 'INV-00001',
      customer: 'Ricky Antony',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 105,
      discount: 5,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Pending'
    },
    {
      invoice: 'INV-00001',
      customer: 'Harry John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 105,
      discount: 5,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Pending'
    },
    {
      invoice: 'INV-00001',
      customer: 'Ricky Antony',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 105,
      discount: 5,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Pending'
    },
    {
      invoice: 'INV-00001',
      customer: 'Ricky Antony',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 105,
      discount: 5,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Pending'
    },
    {
      invoice: 'INV-00001',
      customer: 'Harry John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 105,
      discount: 5,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00001',
      customer: 'Harry John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 105,
      discount: 5,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Pending'
    },
    {
      invoice: 'INV-00001',
      customer: 'Ricky Antony',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 105,
      discount: 5,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Active'
    },
    {
      invoice: 'INV-00002',
      customer: 'Jack John',
      date: '14 Jan 2024',
      due_date: '20 Jan 2024',
      amount: 100,
      discount: 50,
      amount_open: 120,
      adjustment: 0,
      status: 'Pending'
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
        case 'invoice': return compare(a.invoice, b.invoice, isAsc);
        case 'customer': return compare(a.customer, b.customer, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'due_date': return compare(a.due_date, b.due_date, isAsc);
        case 'amount': return compare(a.amount, b.amount, isAsc);
        case 'discount': return compare(a.discount, b.discount, isAsc);
        case 'amount_open': return compare(a.amount_open, b.amount_open, isAsc);
        case 'adjustment': return compare(a.adjustment, b.adjustment, isAsc);
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
