import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stacked-chartjs',
  standalone: true,
  imports: [],
  templateUrl: './stacked-chartjs.component.html',
  styleUrl: './stacked-chartjs.component.css'
})
export class StackedChartjsComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'bar',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, -59, 80, 81, -56, -55, 40, 56, -35, -70],
          backgroundColor: '#0D99FF',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 2',
          data: [65, -59, 80, -81, 56, 55, -40, -54, 60, 25],
          backgroundColor: '#1eaae7',
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 3',
          data:[65, -59, 80, -81, 56, 55, -40, -54, 60, 25],
          backgroundColor: '#d74878',
          stack: 'Stack 1',
        },
      ]
    },
    options: {
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
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
