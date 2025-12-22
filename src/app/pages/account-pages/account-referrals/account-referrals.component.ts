import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';
interface type {
  date: string,
  order_id: string,
  user: string,
  bonus: number
  profit: number,
}

@Component({
  selector: 'app-account-referrals',
  standalone: true,
  imports: [
    NgbModule,
    CurrencyPipe,
    BreadcrumbComponent,
    AccountOverviewHeadComponent,
  ],
  templateUrl: './account-referrals.component.html',
  styleUrl: './account-referrals.component.css'
})
export class AccountReferralsComponent {
  active = 1;
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Referrals',
  }
  billing_history_week: type[] = [
    {
      order_id: '002445788',
      date: 'Nov 01, 2024',
      user: 'Marcus Harris',
      bonus: 26,
      profit: 38.00
    },
    {
      order_id: '002445788',
      date: 'Oct 08, 2024',
      user: 'Marcus Harris',
      bonus: 35,
      profit: 98.03
    },
    {
      date: 'Aug 24, 2024',
      order_id: '578433345',
      user: 'Maria Garcia',
      bonus: 56,
      profit: 35.79
    },
    {
      date: 'Aug 01, 2024',
      order_id: '002445788',
      user: 'Robert Smith',
      bonus: 26,
      profit: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      user: 'Williams Brown',
      bonus: 63,
      profit: -123
    },
    {
      date: 'Jun 17, 2024',
      order_id: '002445788',
      user: 'Paul Johnson',
      bonus: 28,
      profit: 123.79
    }
  ]
  billing_history_month: type[] = [
    {
      date: 'Nov 01, 2024',
      order_id: '002445788',
      user: 'Marcus Harris',
      bonus: 45,
      profit: 123.79
    },
    {
      date: 'Aug 24, 2024',
      order_id: '002445788',
      user: 'Maria Garcia',
      bonus: 40,
      profit: 35.79
    },
    {
      date: 'Oct 08, 2024',
      order_id: '002445788',
      user: 'Sarah Jones',
      bonus: 26,
      profit: 98.03
    },
    {
      date: 'Aug 01, 2024',
      order_id: '578433345',
      user: 'Robert Smith',
      bonus: 14,
      profit: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      user: 'Williams Brown',
      bonus: 35,
      profit: 123.79
    }
  ]
  billing_history_year: type[] = [
    {
      date: 'Nov 01, 2024',
      order_id: '002445788',
      user: 'Marcus Harris',
      bonus: 26,
      profit: 123.79
    },
    {
      date: 'Oct 08, 2024',
      order_id: '002445788',
      user: 'Sarah Jones',
      bonus: 64,
      profit: 98.03
    },
    {
      date: 'Aug 24, 2024',
      order_id: '002445788',
      user: 'Maria Garcia',
      bonus: 36,
      profit: 35.79
    },
    {
      date: 'Aug 01, 2024',
      order_id: '002445788',
      user: 'Robert Smith',
      bonus: 26,
      profit: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      user: 'Williams Brown',
      bonus: 45,
      profit: 123.79
    }
  ]
  billing_history_all: type[] = [
    {
      date: 'Nov 01, 2024',
      order_id: '002445788',
      user: 'Marcus Harris',
      bonus: 42,
      profit: 123.79
    },
    {
      date: 'Oct 08, 2024',
      order_id: '002445788',
      user: 'Sarah Jones',
      bonus: 34,
      profit: -98.03
    },
    {
      date: 'Aug 24, 2024',
      order_id: '002445788',
      user: 'Maria Garcia',
      bonus: 26,
      profit: 35.79
    },
    {
      date: 'Aug 01, 2024',
      order_id: '002445788',
      user: 'Robert Smith',
      bonus: 16,
      profit: 123.79
    },
    {
      date: 'Jul 01, 2024',
      order_id: '002445788',
      user: 'Williams Brown',
      bonus: 26,
      profit: 123.79
    },
    {
      date: 'Jun 17, 2024',
      order_id: '002445788',
      user: 'Paul Johnson',
      bonus: 50,
      profit: 123.79
    }
  ]
}
