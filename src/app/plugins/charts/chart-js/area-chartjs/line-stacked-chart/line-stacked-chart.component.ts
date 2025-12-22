import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-stacked-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-stacked-chart.component.html',
  styleUrl: './line-stacked-chart.component.css'
})
export class LineStackedChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'My First dataset',
          data: [20, -45, 30, -23, 63, 90, -25, -35, 25, 30],
          borderColor: '#1eaae7',
          backgroundColor: '#1eaae7',
          fill: true
        },
        {
          label: 'My Second dataset',
          data: [65, -59, 80, 81, -56, -55, 40, 56, -35, -70],
          borderColor: '#ff5c00',
          backgroundColor: '#ff5c00',
          fill: true
        },
        {
          label: 'My Fourth dataset',
          data: [65, -59, 80, 81, -56, -55, 40, 56, -35, -70],
          borderColor: '#d74878',
          backgroundColor: '#d74878',
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: (ctx: any) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
        },
        tooltip: {
          mode: 'index'
        },
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Value'
          }
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('stackedChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
