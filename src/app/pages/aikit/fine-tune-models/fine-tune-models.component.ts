import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { PaginationComponent } from '../../../elements/pagination/pagination.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';
import { AikitHeadComponent } from '../../../elements/short-cods/aikit/aikit-head/aikit-head.component';
import { Select2Component } from '../../../plugins/select2/select2.component';

export interface Dessert {
  model_name_suffix: string,
  model_name: string,
  base_model: string,
  created: string,
  status: string,
}

@Component({
  selector: 'app-fine-tune-models',
  standalone: true,
  imports: [
    MatSortModule,
    PaginationComponent,
    BreadcrumbComponent,
    AikitHeadComponent,
    DropdownComponent,
    Select2Component
  ],
  templateUrl: './fine-tune-models.component.html',
  styleUrl: './fine-tune-models.component.css'
})
export class FineTuneModelsComponent {
  breadcrumbList = {
    breadcrumb_path: 'AIKit',
    currentURL: 'Fine-tune Models',
  }

  headData = {
    alert_msg: 'This is a demo of AIKit plugin made for you to test the experience of using the plugin. Text & images/ generated in this demo are dummy. In real life, AIKit will call OpenAI API and generate relevant text and images/ based on your prompts.',
    alert_desc: null
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
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Success'
    },

    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Success'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Success'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
    {
      model_name_suffix: 'Write a rat story',
      model_name: 'lion',
      base_model: 'hourly',
      created: '4:50 am July 11, 2024',
      status: 'Pending training data'
    },
   
  ]

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
        case 'model_name_suffix': return compare(a.model_name_suffix, b.model_name_suffix, isAsc);
        case 'model_name': return compare(a.model_name, b.model_name, isAsc);
        case 'base_model': return compare(a.base_model, b.base_model, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'created': return compare(a.created, b.created, isAsc);
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