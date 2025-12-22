import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { Component, TemplateRef } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';

export interface Dessert {
  id: string;
  name: string;
  status: string;
  start_date: string;
  end_date: string;
  assigned: {}[];
  tags: {}[];
  priority: string;
}


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    MatSortModule,
    CurrencyPipe,
    DropdownComponent,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  breadcrumbList = {
    title: 'Task',
    breadcrumb_path: 'Home',
    currentURL: 'Task',
  }
  NotStarted: string = '';

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

    this.startCounting();
  }

  counter: number = 0;
  startCounting(): void {
    if (this.counter <= 25) {
      this.counter++;
      setTimeout(() => {
        this.startCounting();
      }, 1000);
    }
  }

  checkUncheckAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }

  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  dropdown_status1 = {
    style_status: true,
    value: ['Complete', 'Pending', 'Testing', 'In Progress']
  }
  dropdown_status2 = {
    style_status: true,
    value: ['High', 'Medium', 'Low']
  }
  trackByFn(index: number, item: any): any {
    return index; // or a unique identifier for each item
  }

  desserts: Dessert[] = [
    {
      id: '01',
      name: 'Create Frontend WordPress',
      status: 'Complete',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue', 'HTML'],
      priority: 'Medium'
    },
    {
      id: '02',
      name: 'HTML To React Convert',
      status: 'Testing',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue', 'HTML'],
      priority: 'Medium'
    },
    {
      id: '03',
      name: 'Complete Admin Dashboard Project',
      status: 'In Progress',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Angular', 'HTML'],
      priority: 'Low'
    },
    {
      id: '04',
      name: 'Create Frontend WordPress',
      status: 'Testing',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue', 'HTML'],
      priority: 'Medium'
    },
    {
      id: '05',
      name: 'HTML To React Convert',
      status: 'Pending',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue', 'HTML'],
      priority: 'Low'
    },
    {
      id: '06',
      name: 'Complete Admin Dashboard Project',
      status: 'In Progress',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue'],
      priority: 'High'
    },
    {
      id: '01',
      name: 'Create Frontend WordPress',
      status: 'Complete',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue', 'HTML'],
      priority: 'Medium'
    },
    {
      id: '05',
      name: 'HTML To React Convert',
      status: 'Pending',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue', 'HTML'],
      priority: 'Low'
    },
    {
      id: '06',
      name: 'Complete Admin Dashboard Project',
      status: 'In Progress',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue', 'HTML'],
      priority: 'High'
    },
    {
      id: '02',
      name: 'HTML To React Convert',
      status: 'Testing',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['HTML'],
      priority: 'Medium'
    },
    {
      id: '03',
      name: 'Complete Admin Dashboard Project',
      status: 'In Progress',
      start_date: '06 Feb 2024',
      end_date: '19 Feb 2024',
      assigned: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      tags: ['Issue', 'HTML'],
      priority: 'Low'
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
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'start_date': return compare(a.start_date, b.start_date, isAsc);
        case 'end_date': return compare(a.end_date, b.end_date, isAsc);
        // case 'assigned': return compare(a.assigned, b.assigned, isAsc);
        // case 'tags': return compare(a.tags, b.tags, isAsc);
        case 'priority': return compare(a.priority, b.priority, isAsc);
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
