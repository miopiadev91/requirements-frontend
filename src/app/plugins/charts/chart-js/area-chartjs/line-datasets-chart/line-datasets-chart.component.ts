import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-datasets-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-datasets-chart.component.html',
  styleUrl: './line-datasets-chart.component.css'
})
export class LineDatasetsChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Apr"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'D0',
          data: [12, 22, 30, 10, 15, 23,  30, 25, 18, 14],
          borderColor:'#1eaae7',
          backgroundColor: '#1eaae7',
          hidden: true
        },
        {
          label: 'D1',
          data: [16, 35, 25, 32, 23, 26,  36, 35, 25, 19],
          borderColor: '#b5b6b7',
          backgroundColor: '#b5b6b7',
          fill: '-1'
        },
        {
          label: 'D2',
          data: [22, 35, 40, 20, 35, 33,  40, 35, 28, 24],
          borderColor: '#d74878',
          backgroundColor: '#d74878',
          hidden: true,
          fill: 1
        },
        {
          label: 'D3',
          data: [32, 35, 40, 30, 39, 35,  50, 55, 38, 35],
          borderColor: '#86c4b9',
          backgroundColor: '#86c4b9',
          fill: '-1'
        },
        {
          label: 'D4',
          data: [22, 35, 40, 20, 35, 33,  40, 35, 28, 24],
          borderColor: '#ee3c3c',
          backgroundColor: '#ee3c3c',
          fill: '-1'
        },
        {
          label: 'D5',
          data: [60, 68, 80, 50, 39, 66,  50, 55, 88, 35],
          borderColor: '#37699b',
          backgroundColor: '#37699b',
          fill: '+2'
        },
        {
          label: 'D6',
          data: [22, 55, 40, 20, 55, 33,  63, 35, 58, 44],
          borderColor: '#0e8a74',
          backgroundColor: '#0e8a74',
          fill: false
        },
        {
          label: 'D7',
          data: [62, 55, 100, 10, 75, 63,  80, 75, 58, 94],
          borderColor: '#d94828',
          backgroundColor: '#d94828',
          fill: 8
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chartOptions1', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
