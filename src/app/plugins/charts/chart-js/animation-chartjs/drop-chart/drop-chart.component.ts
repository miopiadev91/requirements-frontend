import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-drop-chart',
  standalone: true,
  imports: [],
  templateUrl: './drop-chart.component.html',
  styleUrl: './drop-chart.component.css'
})
export class DropChartComponent {
  labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  chartjs_bar = {
    type: 'line',
    data: {
      labels: this.labels,
      datasets: [
        {
          label: 'Dataset 1',
          animations: {
            y: {
              duration: 2000,
              delay: 500
            }
          },
          data: [20, -25, 30, -23, 33, 10, -25, -35, 25, 30],
          borderColor: '#0D99FF', 
          backgroundColor: 'rgb(135 67 223 / 43%)', 
          fill: 1,
          tension: 0.5
        },
        {
          label: 'Dataset 2',
          data: [65, -59, 55, -81, 56, 59, -40, -54, 70, 35],
          borderColor: '#1eaae7',
          backgroundColor: '#1eaae7',
        }
      ]
    },
    options: {
      animations: {
        y: {
          easing: 'easeInOutElastic',
        }
      }
    }
  }
  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('dropChart', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
