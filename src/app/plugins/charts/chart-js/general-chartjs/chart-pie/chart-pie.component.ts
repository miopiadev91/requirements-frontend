import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-pie',
  standalone: true,
  imports: [],
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.css'
})
export class ChartPieComponent {
  ngOnInit() {
    const cricleChart= {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          '#0D99FF',
          '#1eaae7',
          'rgba(255, 92, 0, 1)',
        ],
        hoverOffset: 4
      }]
    };
    new Chart('pie-chart', {
      type: 'pie',
      data: cricleChart,
    });
  }
}
