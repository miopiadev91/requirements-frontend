import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { AccountOverviewHeadComponent } from '../../../elements/short-cods/profile-account/account-overview-head/account-overview-head.component';
import { BarChartApexComponent } from '../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';

@Component({
  selector: 'app-account-overview',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    DropdownComponent,
    AccountOverviewHeadComponent,
    BarChartApexComponent
  ],
  templateUrl: './account-overview.component.html',
  styleUrl: './account-overview.component.css'
})
export class AccountOverviewComponent {
  breadcrumbList = {
    breadcrumb_path: 'Accounts',
    currentURL: 'Overview',
  }
  dropdown_item = {
    select: 'Slow All',
    value: ['Slow All', 'In Stock', 'Out of Stock']
  }

  chartTopSelling = {
    series: [17, 8, 8, 17, 17, 8, 25],
    chart: {
      type: 'donut',
      width: 350,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: '24px',
              color: 'var(--text-dark)',
              fontWeight: '600',
              offsetY: -16,
            },
            total: {
              show: true,
              fontSize: '14px',
              color: 'var(--text-dark)',
              fontWeight: '500',
              label: 'Total',

              formatter: function (w: any) {
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
    colors: [
      'var(--primary)',
      'var(--bs-success)',
      'var(--bs-danger)',
      'var(--bs-warning)',
      'var(--bs-purple)',
      'var(--bs-dark)',
      'var(--bs-secondary)',
    ],
    labels: [
      "Laptop",
      "Phone",
      "Keyboard",
      "Mouse",
      "Monitors",
      "Watch",
      "Earbuds",
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      colors: [
        'var(--bs-white)',
      ],
    },
    responsive: [
      {
        breakpoint: 1480,
        options: {
          chart: {
            type: 'donut',
            width: 250,
          },
        }
      }
    ]
  };
}
