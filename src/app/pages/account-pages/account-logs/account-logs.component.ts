import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule, Sort } from '@angular/material/sort';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';

export interface Dessert {
  status: string;
  status_class: string;
  location: string;
  ip_address: string;
  created: string;
  device: string;
}

@Component({
  selector: 'app-account-logs',
  standalone: true,
  imports: [
    NgbModule,
    CurrencyPipe,
    MatSortModule,
    DropdownComponent,
    PaginationComponent,
    BreadcrumbComponent,
    AccountOverviewHeadComponent,
  ],
  templateUrl: './account-logs.component.html',
  styleUrl: './account-logs.component.css'
})
export class AccountLogsComponent {
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Logs & Notifcations',
  }

  dropdown_item = {
    select: 'All Time',
    value: ['All Time', 'Today', 'Weekly', 'Months']
  }

  constructor() {
    this.orderData = this.desserts.slice();
  }

  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  active = 1;
  page: any = 1;
  totalRows: number = 7;
  totalPage: any = 0;
  allData: any = [];
  boxActive: Boolean = false;

  contantHead = {
    title: 'Order List',
    desc: 'Lorem ipsum  dolor sit amet',
    title_path: 'Dashboard'
  }

  desserts: Dessert[] = [
    {
      status: "License",
      status_class: "success",
      location: "DSI: Workstation 2",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      device: "Firefox - Windows"
    },
    {
      status: "ERROR",
      status_class: "danger",
      location: "India",
      ip_address: "236.125.56.78",
      created: "20 mins ago",
      device: "Firefox - Windows"
    },
    {
      status: "ERROR",
      status_class: "success",
      location: "United States",
      ip_address: "236.125.56.78",
      created: "27 mins ago",
      device: "Safari - Mac"
    },
    {
      status: "OK",
      status_class: "success",
      location: "Indonesia",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      device: "iOS - iPhone Pro"
    },
    {
      status: "OK",
      status_class: "danger",
      location: "Pakistan",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      device: "Firefox - Windows"
    },
    {
      status: "ERROR",
      status_class: "success",
      location: "RamenLC: Workstation 2",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      device: "Safari - Ma"
    },
    {
      status: "ERROR",
      status_class: "warning",
      location: "Brazil",
      ip_address: "236.125.56.78",
      created: "20 mins ago",
      device: "fftt456765gjkkjhi83093985"
    },
    {
      status: "OK",
      status_class: "success",
      location: "China",
      ip_address: "236.125.56.78",
      created: "52 mins ago",
      device: "Chrome - Windows"
    },
    {
      status: "ERROR",
      status_class: "success",
      location: "India",
      ip_address: "236.125.56.78",
      created: "45 mins ago",
      device: "Firefox - Windows"
    },
    {
      status: "OK",
      status_class: "danger",
      location: "Indonesia",
      ip_address: "236.125.56.78",
      created: "10 mins ago",
      device: "Firefox - Windows"
    },
    {
      status: "ERROR",
      status_class: "success",
      location: "RamenLC: Workstation 2",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      device: "Safari - Ma"
    },
    {
      status: "ERROR",
      status_class: "warning",
      location: "Brazil",
      ip_address: "236.125.56.78",
      created: "20 mins ago",
      device: "fftt456765gjkkjhi83093985"
    },
    {
      status: "OK",
      status_class: "success",
      location: "China",
      ip_address: "236.125.56.78",
      created: "52 mins ago",
      device: "Chrome - Windows"
    },
    {
      status: "ERROR",
      status_class: "success",
      location: "United States",
      ip_address: "236.125.56.78",
      created: "27 mins ago",
      device: "Safari - Mac"
    },
    {
      status: "OK",
      status_class: "success",
      location: "Indonesia",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      device: "iOS - iPhone Pro"
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
        case 'status': return compare(a.status, b.status, isAsc);
        case 'location': return compare(a.location, b.location, isAsc);
        case 'ip_address': return compare(a.ip_address, b.ip_address, isAsc);
        case 'created': return compare(a.created, b.created, isAsc);
        case 'device': return compare(a.device, b.device, isAsc);
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