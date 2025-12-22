import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSortModule, Sort } from '@angular/material/sort';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';

export interface Dessert {
  image: string;
  name: string;
  email: string;
  tags: {}[];
  phone: string;
  status: string;
  dob: string;
}

@Component({
  selector: 'app-app-contacts',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    MatSortModule,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './app-contacts.component.html',
  styleUrl: './app-contacts.component.css'
})
export class AppContactsComponent {
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Apps',
    currentURL: 'Contacts',
  }
  offcanvasExample: boolean = false;
  toggleExample() {
    this.offcanvasExample = !this.offcanvasExample;
  }
  openCenter(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  getBadgeClass(tag: string): string {
    switch (tag) {
      case 'Customer':
        return 'badge badge-success light border-0 badge-sm me-1';
      case 'Lead':
        return 'badge badge-warning light border-0 badge-sm me-1';
      case 'Important':
        return 'badge badge-secondary light border-0 badge-sm me-1';
      case 'Supplier':
        return 'badge badge-danger light border-0 badge-sm me-1';
      default:
        return 'badge badge-primary light border-0 badge-sm me-1';
    }
  }
  boxActive: Boolean = false;
  checkUncheckAll() {
    if (this.boxActive) {
      this.boxActive = false;
    } else {
      this.boxActive = true;
    }
  }

  active = 1;
  page: any = 1;
  totalRows: number = 10;
  totalPage: any = 0;
  allData: any = [];

  constructor(private modalService: NgbModal) {
    this.orderData = this.desserts.slice();
  }

  trackByFn(index: number, item: any): any {
    return index; // or a unique identifier for each item
  }

  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  desserts: Dessert[] = [
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'Biam Lucas',
      email: 'demo1@gmail.com',
      tags: ['Customer'],
      phone: ' (123) 456 789',
      status: 'Avalible',
      dob: '06 Sep 2024'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Hrayson Leo',
      email: 'demo1@gmail.com',
      tags: ['Customer', 'Lead'],
      phone: ' (123) 456 789',
      status: 'In Progress',
      dob: '08 Jan 2024'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Jack Luca',
      email: 'demo1@gmail.com',
      tags: ['Lead'],
      phone: ' (123) 456 789',
      status: 'Cancelled',
      dob: '06 Sep 2024'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Crayson Leo',
      email: 'demo1@gmail.com',
      tags: ['Customer', 'Lead'],
      phone: ' (123) 456 789',
      status: 'In Progress',
      dob: '08 Jan 2024'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Sack Luca',
      email: 'demo1@gmail.com',
      tags: ['Important'],
      phone: ' (123) 456 789',
      status: 'Cancelled',
      dob: '08 Jan 2024'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Jack Luca',
      email: 'demo1@gmail.com',
      tags: ['Supplier'],
      phone: ' (123) 456 789',
      status: 'Cancelled',
      dob: '06 Sep 2024'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Crayson Leo',
      email: 'demo1@gmail.com',
      tags: ['Customer', 'Lead'],
      phone: ' (123) 456 789',
      status: 'In Progress',
      dob: '08 Jan 2024'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Biam Lucas',
      email: 'demo1@gmail.com',
      tags: ['Customer'],
      phone: ' (123) 456 789',
      status: 'Avalible',
      dob: '06 Sep 2024'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'Hrayson Leo',
      email: 'demo1@gmail.com',
      tags: ['Customer', 'Lead'],
      phone: ' (123) 456 789',
      status: 'In Progress',
      dob: '08 Jan 2024'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Jack Luca',
      email: 'demo1@gmail.com',
      tags: ['Lead'],
      phone: ' (123) 456 789',
      status: 'Cancelled',
      dob: '06 Sep 2024'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Crayson Leo',
      email: 'demo1@gmail.com',
      tags: ['Customer', 'Lead'],
      phone: ' (123) 456 789',
      status: 'In Progress',
      dob: '08 Jan 2024'
    },
    {
      image: 'assets/images/contacts/pic1.jpg',
      name: 'Sack Luca',
      email: 'demo1@gmail.com',
      tags: ['Important'],
      phone: ' (123) 456 789',
      status: 'Cancelled',
      dob: '08 Jan 2024'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Hrayson Leo',
      email: 'demo1@gmail.com',
      tags: ['Customer', 'Lead'],
      phone: ' (123) 456 789',
      status: 'In Progress',
      dob: '08 Jan 2024'
    },
    {
      image: 'assets/images/contacts/pic3.jpg',
      name: 'Jack Luca',
      email: 'demo1@gmail.com',
      tags: ['Lead'],
      phone: ' (123) 456 789',
      status: 'Cancelled',
      dob: '06 Sep 2024'
    },
    {
      image: 'assets/images/contacts/pic2.jpg',
      name: 'Crayson Leo',
      email: 'demo1@gmail.com',
      tags: ['Customer', 'Lead'],
      phone: ' (123) 456 789',
      status: 'In Progress',
      dob: '08 Jan 2024'
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
        case 'email': return compare(a.email, b.email, isAsc);
        case 'dob': return compare(a.dob, b.dob, isAsc);
        case 'phone': return compare(a.phone, b.phone, isAsc);
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
