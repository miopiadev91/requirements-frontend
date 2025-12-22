import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';
import { Select2Component } from '../../../plugins/select2/select2.component';
interface type{
  date: string,
  order_id: string,
  description: string,
  amount: number,
}
@Component({
  selector: 'app-account-statements',
  standalone: true,
  imports: [
    NgbModule,
    CurrencyPipe,
    BreadcrumbComponent,
    Select2Component,
    AccountOverviewHeadComponent,
  ],
  templateUrl: './account-statements.component.html',
  styleUrl: './account-statements.component.css'
})
export class AccountStatementsComponent {
  active = 1;
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Statements',
  }

  selectStatus = [
    {
      name: 'Seller Annual Fee',
    },
    {
      name: 'Seller Monthly Fee',
    }
  ];

  billing_history_week:type[] = [ 
    {
      date: 'Nov 01, 2024',
      order_id: '002445788',
      description: 'Invoice for Ocrober 2024',
      amount: 38.00
    },
    {
      date: 'Oct 08, 2024',
      order_id: '002445788',
      description: 'Seller Fee',
      amount: 98.03
    },
    {
      date: 'Aug 24, 2024',
      order_id: '002445788',
      description: 'Paypal',
      amount: 35.79
    },
    {
      date: 'Aug 01, 2024',
      order_id: '002445788',
      description: 'Invoice for July 2024',
      amount: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      description: 'Invoice for June 2024',
      amount: -123
    },
    {
      date: 'Jun 17, 2024',
      order_id: '002445788',
      description: 'Invoice for May 2024',
      amount: 123.79
    },
    {
      date: 'Aug 24, 2024',
      order_id: '002445788',
      description: 'Paypal',
      amount: 35.79
    },
    {
      date: 'Aug 01, 2024',
      order_id: '002445788',
      description: 'Invoice for July 2024',
      amount: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      description: 'Invoice for June 2024',
      amount: -123
    }
  ]
  billing_history_month:type[]  = [ 
    {
      date: 'Nov 01, 2024',
      order_id: '002445788',
      description: 'Invoice for Ocrober 2024',
      amount: 123.79
    },
    {
      date: 'Aug 24, 2024',
      order_id: '002445788',
      description: 'Paypal',
      amount: 35.79
    },
    {
      date: 'Oct 08, 2024',
      order_id: '002445788',
      description: 'Invoice for September 2024',
      amount: 98.03
    },
    {
      date: 'Aug 01, 2024',
      order_id: '002445788',
      description: 'Invoice for July 2024',
      amount: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      description: 'Invoice for June 2024',
      amount: 123.79
    }
  ]
  billing_history_year:type[]  = [ 
    {
      date: 'Nov 01, 2024',
      order_id: '002445788',
      description: 'Invoice for Ocrober 2024',
      amount: 123.79
    },
    {
      date: 'Oct 08, 2024',
      order_id: '002445788',
      description: 'Invoice for September 2024',
      amount: 98.03
    },
    {
      date: 'Aug 24, 2024',
      order_id: '002445788',
      description: 'Paypal',
      amount: 35.79
    },
    {
      date: 'Aug 01, 2024',
      order_id: '002445788',
      description: 'Invoice for July 2024',
      amount: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      description: 'Invoice for June 2024',
      amount: 123.79
    }
  ]
  billing_history_all:type[]  = [ 
    {
      date: 'Nov 01, 2024',
      order_id: '002445788',
      description: 'Invoice for Ocrober 2024',
      amount: 123.79
    },
    {
      date: 'Oct 08, 2024',
      order_id: '002445788',
      description: 'Invoice for September 2024',
      amount: -98.03
    },
    {
      date: 'Aug 24, 2024',
      order_id: '002445788',
      description: 'Paypal',
      amount: 35.79
    },
    {
      date: 'Aug 01, 2024',
      order_id: '002445788',
      description: 'Invoice for July 2024',
      amount: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      description: 'Invoice for June 2024',
      amount: 123.79
    },
    {
      date: 'Jun 17, 2024',
      order_id: '002445788',
      description: 'Invoice for May 2024',
      amount: 123.79
    }
  ]
}