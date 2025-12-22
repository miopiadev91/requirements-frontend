import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { PaginationComponent } from '../../../pagination/pagination.component';
import { CommonModule } from '@angular/common';

export interface Dessert {
  projectName: string,
  userImage: string,
  userName: string,
  assignee: {}[],
  progress: number,
  status: string
  due_date: string,
  isSelected?: boolean;
}


@Component({
  selector: 'app-active-projects-list',
  standalone: true,
  imports: [
    CommonModule,
    MatSortModule,
    PaginationComponent
  ],
  templateUrl: './active-projects-list.component.html',
  styleUrl: './active-projects-list.component.css'
})
export class ActiveProjectsListComponent {
  active = 1;
  page: any = 1;
  totalRows: number = 5;
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
      projectName: 'Batman',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Liam Risher',
      progress: 60,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'primary',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Bender Project',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Oliver Noah',
      progress: 30,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'warning',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Canary',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Elijah James',
      progress: 80,
      assignee: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'success',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Mivy App',
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Honey Risher',
      progress: 52,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'danger',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Crypto App',
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Liam Risher',
      progress: 60,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'warning',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Bender Project',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Oliver Noah',
      progress: 30,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'warning',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Canary',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Elijah James',
      progress: 80,
      assignee: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'success',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Batman',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'William Risher',
      progress: 96,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'primary',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Mivy App',
      userImage: 'assets/images/contacts/pic2.jpg',
      userName: 'Honey Risher',
      progress: 52,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'danger',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Crypto App',
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Liam Risher',
      progress: 60,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'warning',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Bender Project',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Oliver Noah',
      progress: 30,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'warning',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Canary',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Elijah James',
      progress: 80,
      assignee: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'success',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Crypto App',
      userImage: 'assets/images/contacts/pic3.jpg',
      userName: 'Liam Risher',
      progress: 60,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'warning',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Bender Project',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Oliver Noah',
      progress: 30,
      assignee: ['assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'warning',
      due_date: '08 Sep 2024',
    },
    {
      projectName: 'Canary',
      userImage: 'assets/images/contacts/pic1.jpg',
      userName: 'Elijah James',
      progress: 80,
      assignee: ['assets/images/contacts/pic666.jpg', 'assets/images/contacts/pic1.jpg', 'assets/images/contacts/pic555.jpg', 'assets/images/contacts/pic666.jpg'],
      status: 'success',
      due_date: '08 Sep 2024',
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
        case 'userName': return compare(a.userName, b.userName, isAsc);
        case 'progress': return compare(a.progress, b.progress, isAsc);
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


  trackByFn(index: number, item: any): any {
    return index; // or a unique identifier for each item
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}