import { Component, VERSION } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { ProfileOverviewHeadComponent } from '../../../elements/short-cods/profile-account/profile-overview-head/profile-overview-head.component';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';
import { BarChartApexComponent } from '../../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';
import { MyToDoListComponent } from '../../../elements/short-cods/my-to-do-list/my-to-do-list.component';

interface typeToDo {
  title: string,
  date: string,
  status?: string,
  statusText?: string
}
@Component({
  selector: 'app-profile-overview',
  standalone: true,
  imports: [
    LightgalleryModule,
    DropdownComponent,
    ProfileOverviewHeadComponent,
    BreadcrumbComponent,
    BarChartApexComponent,
    MyToDoListComponent
  ],
  templateUrl: './profile-overview.component.html',
  styleUrl: './profile-overview.component.css'
})
export class ProfileOverviewComponent {
  breadcrumbList = {
    breadcrumb_path: 'Profile',
    currentURL: 'Overview',
  }

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom, lgThumbnail]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
  };

  dropdown_item = {
    select: 'Today',
    value: ['Today', 'Week', 'Month']
  }

  chartProjectChart = {
    series: [30, 40, 20, 10],
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
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: '24px',
              fontFamily: 'Arial',
              color: 'var(--text-dark)',
              fontWeight: '500',
              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: '11px',
              color: 'var(--text-dark)',
              fontWeight: '500',
              fontFamily: 'Arial',
              label: 'Total projects',

              formatter: function (w: { globals: { seriesTotals: any[]; }; }) {
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
      '#FF9F00',
      'var(--primary)',
      '#3AC977',
      '#FF5E5E'
    ],
    labels: [
      "Compete",
      "Pending",
      "Not Start"
    ],
    dataLabels: {
      enabled: false,
    },
  };

  chartTopSelling = {
    series: [17, 8, 8, 17, 17, 8, 25],
    chart: {
      type: 'donut',
      width: 340,
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
              formatter: function (w: { globals: { seriesTotals: any[]; }; }) {
                return w.globals.seriesTotals.reduce((a, b) => {
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

  to_do_list: typeToDo[] = [
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00',
      status: 'warning',
      statusText: `Latest to do's`
    },
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00',
      status: 'success',
      statusText: `Latest finished to do's`
    },
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00',
      status: 'danger',
      statusText: `Latest to do's`
    },
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00'
    },
    {
      title: 'Compete this projects Monday',
      date: '2024-12-26 07:15:00'
    }
  ]
}
