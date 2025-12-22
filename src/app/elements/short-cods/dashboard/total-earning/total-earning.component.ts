import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-total-earning',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './total-earning.component.html',
  styleUrl: './total-earning.component.css'
})
export class TotalEarningComponent {
  public chartOptions: any;

  constructor() {}

  ngOnInit(): void {
    const chartWidth = document.getElementById('earningChart')?.offsetWidth || 0;

    this.chartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: [700, 650, 680, 600, 700, 610, 710, 620]
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        width: chartWidth + 55,
        toolbar: { show: false },
        offsetX: -45,
        zoom: { enabled: false }
      },
      colors: ['var(--primary)'],
      dataLabels: { enabled: false },
      legend: { show: false },
      stroke: {
        show: true,
        width: 2,
        curve: 'straight',
        colors: ['var(--primary)']
      },
      grid: {
        show: true,
        borderColor: '#eee',
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: false } }
      },
      yaxis: {
        show: true,
        tickAmount: 4,
        min: 0,
        max: 800,
        labels: { offsetX: 50 }
      },
      xaxis: {
        categories: ['', 'May ', 'June', 'July', 'Aug', 'Sep ', 'Oct'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          show: true,
          offsetX: 5,
          style: { fontSize: '12px' }
        }
      },
      fill: {
        opacity: 0.5,
        colors: 'var(--primary)',
        type: 'gradient',
        gradient: {
          colorStops: [
            { offset: 0.6, color: 'var(--primary)', opacity: 0.2 },
            { offset: 0.6, color: 'var(--primary)', opacity: 0.15 },
            { offset: 100, color: 'white', opacity: 0 }
          ]
        }
      },
      tooltip: {
        enabled: true,
        style: { fontSize: '12px' },
        y: {
          formatter: function (val: number) {
            return "$" + val + "";
          }
        }
      }
    };
  }

  updateSeries(seriesType: string): void {
    let columnData = [];

    switch (seriesType) {
      case 'day':
        columnData = [700, 650, 680, 650, 700, 610, 710, 620];
        break;
      case 'week':
        columnData = [700, 700, 680, 600, 700, 620, 710, 620];
        break;
      case 'month':
        columnData = [700, 650, 690, 640, 700, 670, 710, 620];
        break;
      case 'year':
        columnData = [700, 650, 590, 650, 700, 610, 710, 630];
        break;
      default:
        columnData = [700, 650, 680, 650, 700, 610, 710, 620];
    }

    this.chartOptions.series = [{
      name: 'Net Profit',
      data: columnData
    }];
  }

}
