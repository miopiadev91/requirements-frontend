import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { PaginationComponent } from '../../../pagination/pagination.component';
import { CurrencyPipe } from '@angular/common';

export interface Dessert {
  projectName: string,
  projectImage: string,
  due_date: string,
  price: number,
  orders: number,
  status: string,
  amount: number;
}
@Component({
  selector: 'app-best-selling-list',
  standalone: true,
  imports: [
    MatSortModule,
    PaginationComponent, 
    CurrencyPipe
  ],
  templateUrl: './best-selling-list.component.html',
  styleUrl: './best-selling-list.component.css'
})
export class BestSellingListComponent {
  active = 1;
  page: any = 1;
  totalRows: number = 7;
  totalPage: any = 0;
  allData: any = [];
  boxActive: Boolean = false;

  constructor() {
    this.orderData = this.desserts.slice();
  }
  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  desserts: Dessert[] = [
    {
      projectName: 'lether Dress',
      projectImage: 'assets/images/contacts/d1.jpg',
      due_date: '08 Sep 2024',
      price: 85.20,
      orders: 760,
      status: 'danger',
      amount: 1200.75
    },
    {
      projectName: 'Men Jacket',
      projectImage: 'assets/images/contacts/d2.jpg',
      due_date: '10 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'danger',
      amount: 1200.75
    },
    {
      projectName: 'Midi Dress',
      projectImage: 'assets/images/contacts/d3.jpg',
      due_date: '08 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'success',
      amount: 1200.75
    },
    {
      projectName: 'Boy Dress',
      projectImage: 'assets/images/contacts/d4.jpg',
      due_date: '24 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'success',
      amount: 1200.75
    },
    {
      projectName: 'Men Jacket',
      projectImage: 'assets/images/contacts/d5.jpg',
      due_date: '10 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'danger',
      amount: 1300.75
    },
    {
      projectName: 'Midi Dress',
      projectImage: 'assets/images/contacts/d6.jpg',
      due_date: '08 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'success',
      amount: 1200.75
    },
    {
      projectName: 'Men Jacket',
      projectImage: 'assets/images/contacts/d2.jpg',
      due_date: '10 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'danger',
      amount: 1200.75
    },
    {
      projectName: 'Midi Dress',
      projectImage: 'assets/images/contacts/d3.jpg',
      due_date: '08 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'success',
      amount: 1200.75
    },
    {
      projectName: 'Boy Dress',
      projectImage: 'assets/images/contacts/d4.jpg',
      due_date: '24 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'success',
      amount: 1200.75
    },
    {
      projectName: 'Men Jacket',
      projectImage: 'assets/images/contacts/d5.jpg',
      due_date: '10 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'danger',
      amount: 1300.75
    },
    {
      projectName: 'Midi Dress',
      projectImage: 'assets/images/contacts/d6.jpg',
      due_date: '08 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'success',
      amount: 1200.75
    },
    {
      projectName: 'Men Jacket',
      projectImage: 'assets/images/contacts/d2.jpg',
      due_date: '10 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'danger',
      amount: 1200.75
    },
    {
      projectName: 'Midi Dress',
      projectImage: 'assets/images/contacts/d3.jpg',
      due_date: '08 Apr 2024',
      price: 85.20,
      orders: 760,
      status: 'success',
      amount: 1200.75
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
        case 'projectName': return compare(a.projectName, b.projectName, isAsc);
        case 'price': return compare(a.price, b.price, isAsc);
        case 'orders': return compare(a.orders, b.orders, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'due_date': return compare(a.due_date, b.due_date, isAsc);
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