import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-basic-chart',
  standalone: true,
  imports: [],
  templateUrl: './basic-chart.component.html',
  styleUrl: './basic-chart.component.css'
})
export class BasicChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [25, -59, 80, 81, -56, -55, 40, 56, -35, -70],
          borderColor: '#787878',
          backgroundColor: '#86c4b9',
        },
        {
          label: 'Dataset 2',
          data: [-30, 39, 80, -81, 56, 55, -40, -54, 60, 25],
          borderColor: '#0D99FF',
          backgroundColor:'#ffa675',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('basicline', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
