import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-account-overview-head',
  standalone: true,
  imports: [
    RouterLink,
    BarChartApexComponent
  ],
  templateUrl: './account-overview-head.component.html',
  styleUrl: './account-overview-head.component.css'
})
export class AccountOverviewHeadComponent {
  currentUrl: string = '';
  constructor(private router: Router, private location: Location) {
    this.currentUrl = this.router.url;
  }
  chartProfileProgress = {
    series: [
      {
        name: 'Net Profit',
        data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
      },
    ],
    chart: {
      type: 'area',
      height: 70,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    colors: [
      'var(--primary)'
    ],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: 'straight',
      colors: ['var(--primary)'],
    },
    grid: {
      show: false,
      borderColor: '#eee',
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: -1
      }
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      hover: {
        filter: {
          type: 'none',
          value: 0
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0
        }
      }
    },
    xaxis: {
      categories: [
        'Jan',
        'feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'August',
        'Sept',
        'Oct'
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        style: {
          fontSize: '12px',
        }
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          width: 1,
          dashArray: 3
        }
      },
      tooltip: {
        enabled: false,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: '12px',
        }
      }
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 0.9,
      colors: 'var(--primary)',
      type: 'gradient',
      gradient: {
        colorStops: [
          {
            offset: 0,
            color: 'var(--primary)',
            opacity: .4
          },
          {
            offset: 0.6,
            color: 'var(--primary)',
            opacity: .4
          },
          {
            offset: 100,
            color: 'white',
            opacity: 0
          }
        ],
      }
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: any) {
          return "$" + val
        }
      }
    }
  };
}
