import { Component, TemplateRef } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { EmployeesListComponent } from '../../elements/short-cods/dashboard/employees-list/employees-list.component';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { BarChartApexComponent } from '../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';
import { UpcomingColanderComponent } from '../../elements/short-cods/dashboard/upcoming-colander/upcoming-colander.component';
import { PaginationComponent } from '../../elements/pagination/pagination.component';
import { CommonModule } from '@angular/common';

export interface Dessert {
  image: string,
  name: string,
  position: string,
  attendance: {}[],
  total: string,
}

@Component({
  selector: 'app-core-hr',
  standalone: true,
  imports: [
    NgbModule,
    CommonModule,
    MatSortModule,
    BreadcrumbComponent,
    EmployeesListComponent,
    DropdownComponent,
    BarChartApexComponent,
    UpcomingColanderComponent,
    PaginationComponent
  ],
  templateUrl: './core-hr.component.html',
  styleUrl: './core-hr.component.css'
})
export class CoreHrComponent {

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }
  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  trackByAttendance(index: number, attend: any): any {
    return index; // If attendance doesn't have a unique ID, use the index
  }


  breadcrumbList = {
    title: 'Core HR',
    breadcrumb_path: 'Home',
    currentURL: 'Core HR',
  }
  dropdown_item = {
    select: 'All Time',
    value: ['All Time', 'Week', 'Month']
  }

  projectChart = {
    series: [30, 40, 20, 10],
    chart: {
      type: 'donut',
      width: 270,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: '24px',
              fontFamily: 'Arial',
              fontWeight: '500',
              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: '11px',
              fontWeight: '500',
              fontFamily: 'Arial',
              label: 'Total projects',

              formatter: function (w: { globals: { seriesTotals: any[]; }; }) {
                return w.globals.seriesTotals.reduce((a: any, b: any) => {
                  return a + b
                }, 0)
              }
            }
          }
        }
      }
    },
    legend: {
      show: false,
    },
    colors: ['#FF9F00', 'var(--primary)', '#3AC977', '#FF5E5E'],
    labels: ["Compete", "Pending", "Not Start"],
    dataLabels: {
      enabled: false,
    },
  };



  active = 1;
  page: any = 1;
  totalRows: number = 8;
  totalPage: any = 0;
  allData: any = [];

  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  desserts: Dessert[] = [
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Moni Antony',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'Joney Antony',
      position: 'Web Designer',
      attendance: ['a', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Peter Oliver',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'a', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Ricky Antony',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'a', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'a', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Moni Antony',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'Joney Antony',
      position: 'Web Designer',
      attendance: ['a', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Peter Oliver',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'a', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Ricky Antony',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'a', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'a', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Peter Oliver',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'a', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Ricky Antony',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'a', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'a', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Moni Antony',
      position: 'Web Designer',
      attendance: ['p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p'],
      total: '28/31'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'Joney Antony',
      position: 'Web Designer',
      attendance: ['a', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'a', 'p'],
      total: '28/31'
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
        case 'total': return compare(a.total, b.total, isAsc);
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

