import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-radar',
  standalone: true,
  imports: [],
  templateUrl: './chart-radar.component.html',
  styleUrl: './chart-radar.component.css'
})
export class ChartRadarComponent {
  ngOnInit() {
    const labels =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    const dataBar = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [35, 40, 81, 35, 92, 40, 10],
          borderColor: '#1eaae7',
          backgroundColor: 'rgba(14, 138, 116, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: [67, 70, 31, 65, 42, 86, 44],
          borderColor: '#ff5c00',
          backgroundColor: '#ffa675',
        }
      ]
    };

    new Chart('redar-chart', {
      type: 'radar',
      data: dataBar,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Radar Chart'
          }
        }
      },
    });
  }
}
