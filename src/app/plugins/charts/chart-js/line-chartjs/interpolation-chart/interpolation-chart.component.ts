import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-interpolation-chart',
  standalone: true,
  imports: [],
  templateUrl: './interpolation-chart.component.html',
  styleUrl: './interpolation-chart.component.css'
})
export class InterpolationChartComponent {
  labels = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10, 11];
  datapoints = [0, 20, 20, 50, 60, 120, NaN, 180, 120, 125, 105, 110, 170];

  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Cubic interpolation (monotone)',
          data: this.datapoints,
          borderColor: '#d74878',
          fill: false,
          cubicInterpolationMode: 'monotone',
          tension: 0.4
        }, {
          label: 'Cubic interpolation',
          data: this.datapoints,
          borderColor: '#1eaae7',
          fill: false,
          tension: 0.4
        }, {
          label: 'Linear interpolation (default)',
          data: this.datapoints,
          borderColor: '#0D99FF',
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          },
          suggestedMin: -10,
          suggestedMax: 200
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('interpolation', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
