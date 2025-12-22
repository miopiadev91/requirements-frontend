import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BarChartApexComponent } from '../../elements/chart-config/bar-chart-apex/bar-chart-apex.component';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { TotalEarningComponent } from '../../elements/short-cods/dashboard/total-earning/total-earning.component';
import { ProjectsOverviewComponent } from '../../elements/short-cods/dashboard/projects-overview/projects-overview.component';
import { MyToDoListComponent } from '../../elements/short-cods/my-to-do-list/my-to-do-list.component';
import { ActiveProjectsListComponent } from '../../elements/short-cods/dashboard/active-projects-list/active-projects-list.component';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { BestSellingListComponent } from '../../elements/short-cods/dashboard/best-selling-list/best-selling-list.component';
import { EmployeesListComponent } from '../../elements/short-cods/dashboard/employees-list/employees-list.component';
import { UpcomingColanderComponent } from '../../elements/short-cods/dashboard/upcoming-colander/upcoming-colander.component';
import { ActiveUsersComponent } from '../../elements/widget/chart/active-users/active-users.component';

interface typeToDo {
  title: string,
  date: string,
  status?: string,
  statusText?: string
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    BarChartApexComponent,
    BreadcrumbComponent,
    TotalEarningComponent,
    ProjectsOverviewComponent,
    MyToDoListComponent,
    ActiveProjectsListComponent,
    DropdownComponent,
    BestSellingListComponent,
    EmployeesListComponent,
    UpcomingColanderComponent,
    ActiveUsersComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Home',
    currentURL: 'Dashboard',
  }

  chat_dropdown = {
    select: 'Setting',
    value: ['Setting', 'Group', 'Chat']
  }
  selling_roducts_dropdown = {
    select: 'Today',
    value: ['Today', 'Week', 'Month']
  }
  NewCustomers = {
    series: [
      {
        name: 'Net Profit',
        data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
        /* radius: 30,	 */
      },
    ],
    chart: {
      type: 'area',
      height: 40,
      //width: 400,
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

    colors: ['var(--primary)'],
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
      categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
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
        enabled: true,
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
      enabled: false,
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: any) {
          return "$" + val + " thousands"
        }
      }
    }
  };

  AllProject = {
    series: [12, 30, 20],
    chart: {
      type: 'donut',
      width: 170,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '80%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Arial',
              fontWeight: '500',
              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: '11px',
              fontWeight: '500',
              fontFamily: 'Arial',
              label: 'Compete',

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
    colors: ['#3AC977', 'var(--primary)', 'var(--secondary)'],
    labels: ["Compete", "Pending", "Not Start"],
    dataLabels: {
      enabled: false,
    },
  };

  NewExperience = {
    series: [
      {
        name: 'Net Profit',
        data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
        /* radius: 30,	 */
      },
    ],
    chart: {
      type: 'area',
      height: 40,
      //width: 400,
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

    colors: ['var(--primary)'],
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
      colors: ['#FF5E5E'],
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
      categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct'],
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
        enabled: true,
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
      colors: '#FF5E5E',
      type: 'gradient',
      gradient: {
        colorStops: [

          {
            offset: 0,
            color: '#FF5E5E',
            opacity: .5
          },
          {
            offset: 0.6,
            color: '#FF5E5E',
            opacity: .5
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
      enabled: false,
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: string) {
          return "$" + val + " thousands"
        }
      }
    }
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

  projectChart = {
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
              fontWeight: '500',
              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: '11px',
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
    colors: ['#FF9F00', 'var(--primary)', '#3AC977', '#FF5E5E'],
    labels: ["Compete", "Pending", "Not Start"],
    dataLabels: {
      enabled: false,
    },
  };
}
