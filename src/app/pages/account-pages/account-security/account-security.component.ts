import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSortModule, Sort } from '@angular/material/sort';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { BarChartApexComponent } from '../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';

interface cardType {
  SubTitle: string,
  title: string,
  desc: string,
  time?: string
}

export interface Dessert {
  status: string;
  status_class: string;
  operator: string;
  ip_address: string;
  created: string;
  api_keys: string;
}

@Component({
  selector: 'app-account-security',
  standalone: true,
  imports: [
    MatSortModule,
    PaginationComponent,
    CommonModule,
    CarouselModule,
    BreadcrumbComponent,
    DropdownComponent,
    AccountOverviewHeadComponent,
    BarChartApexComponent,
  ],
  templateUrl: './account-security.component.html',
  styleUrl: './account-security.component.css'
})
export class AccountSecurityComponent {
  lineChartSecuritySummary: any;
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Security',
  }
  dropdown_item = {
    select: 'All Time',
    value: ['All Time', 'Today', 'Weekly', 'Months']
  }

  chartWidth: number = 0;

  constructor() {
    this.orderData = this.desserts.slice();
  }


  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;

    // Access the element using document.getElementById
    const element = document.getElementById('lineChartSecuritySummary');
    if (element) {
      this.chartWidth = element.offsetWidth;
    }
    this.lineChartSecuritySummary = {
      series: [
        {
          name: 'Net Profit',
          data: [700, 650, 680, 590, 720, 610, 760, 530, 610],
        },
      ],
      chart: {
        type: 'area',
        height: 280,
        width: this.chartWidth + 55,
        toolbar: {
          show: false,
        },
        offsetX: -45,
        zoom: {
          enabled: false
        },
      },
      colors: [
        'var(--primary)'
      ],
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 2,
        curve: 'straight',
        colors: ['var(--primary)'],
      },
      grid: {
        show: true,
        borderColor: '#eee',

        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
      },
      yaxis: {
        show: true,
        tickAmount: 4,
        min: 0,
        max: 800,
        labels: {
          offsetX: 50,
        }
      },
      xaxis: {
        categories: [
          'May',
          'June',
          'July',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        overwriteCategories: undefined,

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: true,
          offsetX: 25,

          style: {
            fontSize: '12px',
          }
        },
      },
      fill: {
        opacity: 0.5,
        colors: 'var(--primary)',
        type: 'gradient',
        gradient: {
          colorStops: [
            {
              offset: 0.6,
              color: 'var(--primary)',
              opacity: .2
            },
            {
              offset: 0.6,
              color: 'var(--primary)',
              opacity: .15
            },
            {
              offset: 100,
              color: 'var(--primary)',
              opacity: 0
            },
          ],
        }
      },
      tooltip: {
        enabled: true,
        style: {
          fontSize: '12px',
        },
        y: {
          formatter: function (val: any) {
            return "$" + val + ""
          }
        }
      }
    };
  }

  customOptions: any = {
    items: 1,
    loop: true,
    margin: 5,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  }

  cardItems: cardType[] = [
    {
      SubTitle: 'Recent Alerts',
      title: 'Login Attempt Failed',
      desc: 'To start a blog, think of a topic about good awesome first brainstorm details',
      time: '2 mins ago'
    },
    {
      SubTitle: 'Recent Alerts',
      title: 'Login Attempt Failed',
      desc: 'To start a blog, think of a topic about good awesome first brainstorm details',
      time: '4 mins ago'
    },
    {
      SubTitle: 'Recent Alerts',
      title: 'Login Attempt Failed',
      desc: 'To start a blog, think of a topic about good awesome first brainstorm details',
      time: '5 mins ago'
    },
    {
      SubTitle: 'Recent Alerts',
      title: 'Login Attempt Failed',
      desc: 'To start a blog, think of a topic about good awesome first brainstorm details',
      time: '2 mins ago'
    }
  ]
  cardItems2: cardType[] = [
    {
      SubTitle: 'Security Guidelines',
      title: 'Get Start Your Security',
      desc: 'To start a blog, think of a topic about good awesome first brainstorm details'
    },
    {
      SubTitle: 'Security Guidelines',
      title: 'Get Start Your Security',
      desc: 'To start a blog, think of a topic about good awesome first brainstorm details'
    },
    {
      SubTitle: 'Security Guidelines',
      title: 'Get Start Your Security',
      desc: 'To start a blog, think of a topic about good awesome first brainstorm details'
    },
    {
      SubTitle: 'Security Guidelines',
      title: 'Get Start Your Security',
      desc: 'To start a blog, think of a topic about good awesome first brainstorm details'
    }
  ]



  active = 1;
  page: any = 1;
  totalRows: number = 5;
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
      operator: "DSI: Workstation 2",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "fftt456765gjkkjhi83093985"
    },
    {
      status: "Unknown",
      status_class: "danger",
      operator: "ReXe: Workstation 29",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "none"
    },
    {
      status: "License",
      status_class: "success",
      operator: "RamenLC: Workstation 2",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "none"
    },
    {
      status: "License",
      status_class: "success",
      operator: "Nest Five: Workstation 86",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "fftt456765gjkkjhi83093985"
    },
    {
      status: "Unknown",
      status_class: "danger",
      operator: "DSI: Workstation 3",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "fftt456765gjkkjhi83093985"
    },
    {
      status: "License",
      status_class: "success",
      operator: "RamenLC: Workstation 2",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "none"
    },
    {
      status: "To be Paid",
      status_class: "warning",
      operator: "Swedline: Workstation 54",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "fftt456765gjkkjhi83093985"
    },
    {
      status: "License",
      status_class: "success",
      operator: "Swedline: Workstation 21",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "fftt456765gjkkjhi83093985"
    },
    {
      status: "License",
      status_class: "success",
      operator: "RamenLC: Workstation 2",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "none"
    },
    {
      status: "Unknown",
      status_class: "danger",
      operator: "Konami: Workstation 4",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "none"
    },
    {
      status: "License",
      status_class: "success",
      operator: "RamenLC: Workstation 2",
      ip_address: "236.125.56.78",
      created: "2 mins ago",
      api_keys: "none"
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
        case 'operator': return compare(a.operator, b.operator, isAsc);
        case 'ip_address': return compare(a.ip_address, b.ip_address, isAsc);
        case 'created': return compare(a.created, b.created, isAsc);
        case 'api_keys': return compare(a.api_keys, b.api_keys, isAsc);
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