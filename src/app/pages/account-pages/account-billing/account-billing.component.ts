import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

interface type{
  date: string,
  description: string,
  amount: string,
}
@Component({
  selector: 'app-account-billing',
  standalone: true,
  imports: [
    NgbModule,
    BreadcrumbComponent,
    AccountOverviewHeadComponent,
  ],
  templateUrl: './account-billing.component.html',
  styleUrl: './account-billing.component.css'
})
export class AccountBillingComponent {
  active = 1;
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Billing',
  }

  billing_history_week:type[] = [ 
    {
      date: 'Nov 01, 2024',
      description: 'Invoice for Ocrober 2024',
      amount: '$123.79'
    },
    {
      date: 'Oct 08, 2024',
      description: 'Invoice for September 2024',
      amount: '$98.03'
    },
    {
      date: 'Aug 24, 2024',
      description: 'Paypal',
      amount: '$35.79'
    },
    {
      date: 'Aug 01, 2024',
      description: 'Invoice for July 2024',
      amount: '$123.79'
    },
    {
      date: 'Jul 01, 2024',
      description: 'Invoice for June 2024',
      amount: '$123.79'
    },
    {
      date: 'Jun 17, 2024',
      description: 'Invoice for May 2024',
      amount: '$123.79'
    }
  ]
  billing_history_month:type[]  = [ 
    {
      date: 'Nov 01, 2024',
      description: 'Invoice for Ocrober 2024',
      amount: '$123.79'
    },
    {
      date: 'Aug 24, 2024',
      description: 'Paypal',
      amount: '$35.79'
    },
    {
      date: 'Oct 08, 2024',
      description: 'Invoice for September 2024',
      amount: '$98.03'
    },
    {
      date: 'Aug 01, 2024',
      description: 'Invoice for July 2024',
      amount: '$123.79'
    },
    {
      date: 'Jul 01, 2024',
      description: 'Invoice for June 2024',
      amount: '$123.79'
    }
  ]
  billing_history_year:type[]  = [ 
    {
      date: 'Nov 01, 2024',
      description: 'Invoice for Ocrober 2024',
      amount: '$123.79'
    },
    {
      date: 'Oct 08, 2024',
      description: 'Invoice for September 2024',
      amount: '$98.03'
    },
    {
      date: 'Aug 24, 2024',
      description: 'Paypal',
      amount: '$35.79'
    },
    {
      date: 'Aug 01, 2024',
      description: 'Invoice for July 2024',
      amount: '$123.79'
    },
    {
      date: 'Jul 01, 2024',
      description: 'Invoice for June 2024',
      amount: '$123.79'
    }
  ]
  billing_history_all:type[]  = [ 
    {
      date: 'Nov 01, 2024',
      description: 'Invoice for Ocrober 2024',
      amount: '$123.79'
    },
    {
      date: 'Oct 08, 2024',
      description: 'Invoice for September 2024',
      amount: '$98.03'
    },
    {
      date: 'Aug 24, 2024',
      description: 'Paypal',
      amount: '$35.79'
    },
    {
      date: 'Aug 01, 2024',
      description: 'Invoice for July 2024',
      amount: '$123.79'
    },
    {
      date: 'Jul 01, 2024',
      description: 'Invoice for June 2024',
      amount: '$123.79'
    },
    {
      date: 'Jun 17, 2024',
      description: 'Invoice for May 2024',
      amount: '$123.79'
    }
  ]
}
