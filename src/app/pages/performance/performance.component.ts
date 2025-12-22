import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PaginationComponent } from '../../elements/pagination/pagination.component';

export interface Dessert {
  title: string,
  designation: string;
  rating: number;
  added_by: string;
  created_date: string;
}


@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [
    MatSortModule,
    CommonModule,
    CurrencyPipe,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './performance.component.html',
  styleUrl: './performance.component.css'
})
export class PerformanceComponent {
  breadcrumbList = {
    title: 'Performance',
    breadcrumb_path: 'Home',
    currentURL: 'Performance',
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
      title: 'Jack',
      designation: 'Civil Engineer',
      rating: 4,
      added_by: 'John Marry',
      created_date: '14 Feb 2024'
    },
    {
      title: 'Khalid',
      designation: 'Software Engineer',
      rating: 3,
      added_by: 'JCaty Fsa',
      created_date: '14 Feb 2024'
    }, 
    {
      title: 'Ethan',
      designation: 'Website Engineer',
      rating: 4,
      added_by: 'John Marry',
      created_date: '14 Feb 2024'
    },
    {
      title: 'Peter',
      designation: 'Software Engineer',
      rating: 3.5,
      added_by: 'Geeta Marry',
      created_date: '19 Feb 2024'
    },
    {
      title: 'Aaron',
      designation: 'Civil Engineer',
      rating: 3,
      added_by: 'John Marry',
      created_date: '14 Feb 2024'
    }, 
    {
      title: 'Scott',
      designation: 'Software Engineer',
      rating: 4,
      added_by: 'John Marry',
      created_date: '14 Feb 2024'
    },
    {
      title: 'Peter',
      designation: 'Software Engineer',
      rating: 3.5,
      added_by: 'Caty Fsa',
      created_date: '19 Feb 2024'
    },
    {
      title: 'Khalid',
      designation: 'Software Engineer',
      rating: 3,
      added_by: 'JCaty Fsa',
      created_date: '14 Feb 2024'
    }, 
    {
      title: 'Ethan',
      designation: 'Website Engineer',
      rating: 4,
      added_by: 'John Marry',
      created_date: '14 Feb 2024'
    },
    {
      title: 'Peter',
      designation: 'Software Engineer',
      rating: 3.5,
      added_by: 'Geeta Marry',
      created_date: '19 Feb 2024'
    },
    {
      title: 'Scott',
      designation: 'Software Engineer',
      rating: 4,
      added_by: 'John Marry',
      created_date: '14 Feb 2024'
    },
    {
      title: 'Peter',
      designation: 'Software Engineer',
      rating: 3.5,
      added_by: 'Caty Fsa',
      created_date: '19 Feb 2024'
    },
    {
      title: 'Jack',
      designation: 'Civil Engineer',
      rating: 4,
      added_by: 'John Marry',
      created_date: '14 Feb 2024'
    },
    {
      title: 'Khalid',
      designation: 'Software Engineer',
      rating: 3,
      added_by: 'JCaty Fsa',
      created_date: '14 Feb 2024'
    }, 
    {
      title: 'Ethan',
      designation: 'Website Engineer',
      rating: 4,
      added_by: 'John Marry',
      created_date: '14 Feb 2024'
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
        case 'title': return compare(a.title, b.title, isAsc);
        case 'designation': return compare(a.designation, b.designation, isAsc);
        case 'rating': return compare(a.rating, b.rating, isAsc);
        case 'added_by': return compare(a.added_by, b.added_by, isAsc);
        case 'created_date': return compare(a.created_date, b.created_date, isAsc);
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

  getValidRating(rating: number): number {
    return Math.max(0, Math.floor(rating));
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
