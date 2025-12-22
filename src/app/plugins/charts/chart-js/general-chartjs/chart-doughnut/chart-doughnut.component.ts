import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-doughnut',
  standalone: true,
  imports: [],
  templateUrl: './chart-doughnut.component.html',
  styleUrl: './chart-doughnut.component.css'
})
export class ChartDoughnutComponent {
  ngOnInit() {
    const cricleChart= {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [200, 80, 120],
        backgroundColor: [
          'rgba(255, 92, 0, 1)',
          '#0D99FF',
          '#1eaae7',
        ],
        hoverOffset: 4
      }]
    };
    new Chart('doughnut-chart', {
      type: 'doughnut',
      data: cricleChart,
    });
  }
}
