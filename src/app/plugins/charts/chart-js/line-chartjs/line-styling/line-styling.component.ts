import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-styling',
  standalone: true,
  imports: [],
  templateUrl: './line-styling.component.html',
  styleUrl: './line-styling.component.css'
})
export class LineStylingComponent {
  labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Unfilled',
          fill: false,
          backgroundColor: '#1eaae7',
          borderColor: '#1eaae7',
          data: [65, -45, 80, 81, -56, -55, 40, 56, -35, -70],
        }, {
          label: 'Dashed',
          fill: false,
          backgroundColor: '#0D99FF',
          borderColor: '#0D99FF',
          borderDash: [5, 5],
          data: [36, -59, 80, -81, 56, 55, -40, -54, 60, 25],
        }, {
          label: 'Filled',
          backgroundColor: '#d74878',
          borderColor: '#d74878',
          data: [35, -59, 80, 56, 60, -55, -40, 70, 60, -65],
          fill: true,
        }
      ]
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month'
          }
        },
        y: {
          display: true,
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
    new Chart('lineStyling', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
