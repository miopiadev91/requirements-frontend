import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { ProfileOverviewHeadComponent } from '../../../elements/short-cods/profile-account/profile-overview-head/profile-overview-head.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';
import { BarChartApexComponent } from '../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';

@Component({
  selector: 'app-profile-projects-details',
  standalone: true,
  imports: [
    RouterLink,
    ProfileOverviewHeadComponent,
    BreadcrumbComponent,
    DropdownComponent,
    BarChartApexComponent
  ],
  templateUrl: './profile-projects-details.component.html',
  styleUrl: './profile-projects-details.component.css'
})
export class ProfileProjectsDetailsComponent {
  breadcrumbList = {
    breadcrumb_path: 'Profile',
    currentURL: 'Projects Details',
  }

  dropdown_item = {
    select: '2024',
    value: ['2024', '2023', '2022', '2021']
  }

  chartTasksSummary = {
    series: [25, 17, 20, 38],
    chart: {
      type: 'donut',
      width: 270,
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
              fontWeight: '600',
              offsetY: -16,
              color: 'var(--text-dark)',
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
    ],
    labels: [
      "Employee",
      "Present",
      "Absent",
      "Holiday"
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
  };

  chartTasksOverTime = {
    series: [
      {
        name: 'Incomplete',
        data: [90, 120, 120, 100, 100, 90]
      },
      {
        name: 'Comple',
        data: [50, 75, 75, 55, 55, 70]
      }
    ],
    chart: {
      height: 280,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    colors: [
      "var(--bs-danger)",
      "var(--primary)"
    ],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: 'var(--border-light)',
    },
    yaxis: {
      min: 0,
      max: 120,
      tickAmount: 4,
      labels: {
        style: {
          colors: '#888888',
          fontSize: '14px',
        },
        formatter: function (value: any) {
          return value;
        }
      },
    },
    xaxis: {
      categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      labels: {
        style: {
          colors: '#888888',
          fontSize: '12px',
        },
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          [
            {
              offset: 0,
              color: 'var(--bs-danger)',
              opacity: 0.2
            },
            {
              offset: 50,
              color: 'var(--bs-danger)',
              opacity: 0.1
            },
            {
              offset: 80,
              color: 'var(--bs-danger)',
              opacity: 0
            }
          ],
          [
            {
              offset: 0,
              color: 'var(--primary)',
              opacity: 0.2
            },
            {
              offset: 0.4,
              color: 'var(--primary)',
              opacity: 0.2
            },
            {
              offset: 100,
              color: 'var(--primary)',
              opacity: 0.2
            }
          ],
        ]
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    responsive: [{
      breakpoint: 575,
      options: {
        chart: {
          height: 200,
        },
        stroke: {
          width: 3,
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '11px',
            },
          },
        },
        xaxis: {
          labels: {
            style: {
              fontSize: '11px',
            },
          },
        },
      },
    }]
  }
}
