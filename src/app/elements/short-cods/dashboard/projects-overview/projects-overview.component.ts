import { Component } from '@angular/core';
import { BarChartApexComponent } from '../../../chart-config/bar-chart-apex/bar-chart-apex.component';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexTooltip,
  ApexLegend,
  ApexPlotOptions,
  ApexFill,
  ApexGrid,
  NgApexchartsModule,
} from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  grid: ApexGrid;
  colors: string[];
  labels: string[];
};

@Component({
  selector: 'app-projects-overview',
  standalone: true,
  imports: [NgApexchartsModule,BarChartApexComponent],
  templateUrl: './projects-overview.component.html',
  styleUrl: './projects-overview.component.css'
})
export class ProjectsOverviewComponent {
  public chartOptions: Partial<ChartOptions>;
  overiewChart: any = [];

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Number of Projects',
          type: 'column',
          data: [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100],
        },
        {
          name: 'Revenue',
          type: 'area',
          data: [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42],
        },
        {
          name: 'Active Projects',
          type: 'line',
          data: [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20],
        },
      ],
      chart: {
        height: 300,
        type: 'line',
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: [0, 1, 1],
        curve: 'straight',
        dashArray: [0, 0, 5],
      },
      legend: {
        fontSize: '13px',
        fontFamily: 'Poppins',
        labels: {
          colors: '#888888',
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '18%',
          borderRadius: 6,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          colorStops: [
            [
              {
                offset: 0,
                color: 'var(--primary)',
                opacity: 1,
              },
              {
                offset: 100,
                color: 'var(--primary)',
                opacity: 1,
              },
            ],
            [
              {
                offset: 0,
                color: '#3AC977',
                opacity: 1,
              },
              {
                offset: 0.4,
                color: '#3AC977',
                opacity: 0.15,
              },
              {
                offset: 100,
                color: '#3AC977',
                opacity: 0,
              },
            ],
            [
              {
                offset: 0,
                color: '#FF5E5E',
                opacity: 1,
              },
              {
                offset: 100,
                color: '#FF5E5E',
                opacity: 1,
              },
            ],
          ],
        },
      },
      colors: ['var(--primary)', '#3AC977', '#FF5E5E'],
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '13px',
            colors: '#888888',
          },
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          style: {
            fontSize: '13px',
            colors: '#888888',
          },
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y: number) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0) + ' points';
            }
            return y;
          },
        },
      },
    };
  }

  ngOnInit(): void {}

  updateSeries(seriesType: string) {
    let columnData = [];
    let areaData = [];
    let lineData = [];
    switch (seriesType) {
      case 'week':
        columnData = [75, 85, 72, 100, 50, 100, 80, 75, 95, 35, 75, 100];
        areaData = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42];
        lineData = [30, 25, 45, 30, 25, 35, 20, 45, 35, 20, 35, 20];
        break;
      case 'month':
        columnData = [20, 50, 80, 52, 10, 80, 50, 30, 95, 10, 60, 85];
        areaData = [40, 25, 85, 45, 85, 25, 95, 65, 45, 45, 20, 12];
        lineData = [65, 45, 25, 65, 45, 25, 75, 35, 65, 75, 15, 65];
        break;
      case 'year':
        columnData = [30, 20, 80, 52, 10, 90, 50, 30, 95, 20, 60, 85];
        areaData = [40, 25, 40, 45, 85, 25, 50, 65, 45, 60, 20, 12];
        lineData = [65, 45, 30, 65, 45, 25, 75, 40, 65, 50, 15, 65];
        break;
      case 'all':
        columnData = [20, 50, 80, 60, 10, 80, 50, 40, 95, 20, 60, 85];
        areaData = [40, 25, 30, 45, 85, 25, 95, 65, 50, 45, 20, 12];
        lineData = [65, 45, 25, 65, 45, 25, 30, 35, 65, 75, 15, 65];
        break;
      default:
        columnData = [75, 80, 72, 100, 50, 100, 80, 30, 95, 35, 75, 100];
        areaData = [44, 65, 55, 75, 45, 55, 40, 60, 75, 45, 50, 42];
        lineData = [30, 25, 45, 30, 25, 35, 20, 45, 35, 30, 35, 20];
    }
    this.chartOptions.series = [
      {
        name: 'Number of Projects',
        type: 'column',
        data: columnData,
      },
      {
        name: 'Revenue',
        type: 'area',
        data: areaData,
      },
      {
        name: 'Active Projects',
        type: 'line',
        data: lineData,
      },
    ];
  }
}
