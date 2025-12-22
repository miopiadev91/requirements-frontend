import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';
import { AikitHeadComponent } from '../../../elements/short-cods/aikit/aikit-head/aikit-head.component';
import { Select2Component } from '../../../plugins/select2/select2.component';

export interface Dessert {
  url: string,
  job_type: string,
  keywords: string,
  status: string,
  had_errors: string,
  date_created: string
}

@Component({
  selector: 'app-repurpose',
  standalone: true,
  imports: [
    MatSortModule,
    PaginationComponent,
    BreadcrumbComponent,
    AikitHeadComponent,
    DropdownComponent,
    Select2Component
  ],
  templateUrl: './repurpose.component.html',
  styleUrl: './repurpose.component.css'
})
export class RepurposeComponent {
  breadcrumbList = {
    breadcrumb_path: 'AIKit',
    currentURL: 'Repurpose',
  }

  headData = {
    alert_msg: 'This is a demo of AIKit plugin made for you to test the experience of using the plugin.',
    alert_desc: 'AIKit Auto Writer is a tool helps you write drafts quickly, but please review and edit before publishing for best results. This is not a substitute for human editing, but a drafting aid. Happy writing!'
  }

  dropdown_item = {
    select: 'England',
    value: ['England', 'India', 'UAE'],
    image:['assets/images/svg/england.svg', 'assets/images/svg/india.svg', 'assets/images/svg/united-arab-emirates.svg']
  }

  select2_post = [
    {
      name: 'Post',
    },
    {
      name: 'Product',
    }
  ];
  select2_category = [
    {
      name: 'Uncategorized',
    },
    {
      name: 'Categorized',
    }
  ];
  select2_status = [
    {
      name: 'Draft',
    },
    {
      name: 'Categorized',
    }
  ];

  
  constructor() {
    this.orderData = this.desserts.slice();
  }
  
  ngOnInit(): void {
    this.allData = this.paginator(this.orderData, this.page, this.totalRows);
    this.totalPage = this.allData.total_pages;
  }

  page: any = 1;
  totalRows: number = 10;
  totalPage: any = 0;
  allData: any = [];

  desserts: Dessert[] = [
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'Yes',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'Yes',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'Yes',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
    },
    {
      url: 'www.wsj.com/articles/against-middle-class-kids-legacy-admissions-court-85cf4503',
      job_type: 'URL',
      keywords: '-',
      status: 'No',
      had_errors: 'No',
      date_created: '5:50 am July 11, 2024'
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
        case 'url': return compare(a.url, b.url, isAsc);
        case 'job_type': return compare(a.job_type, b.job_type, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'keywords': return compare(a.keywords, b.keywords, isAsc);
        case 'had_errors': return compare(a.had_errors, b.had_errors, isAsc);
        case 'date_created': return compare(a.date_created, b.date_created, isAsc);
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
