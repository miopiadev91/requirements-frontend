import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-doughnut-chart-js',
  standalone: true,
  imports: [
    CommonModule,
    NgStyle
  ],
  templateUrl: './doughnut-chart-js.component.html',
  styleUrl: './doughnut-chart-js.component.css'
})
export class DoughnutChartJsComponent {
  @Input() chartOptions: any = '';
  @Input() index: any = 1;
  ngOnInit() {
    const cricleChart = {
      datasets: [{
        data: [this.chartOptions[0].data, 100 - this.chartOptions[0].data],
        backgroundColor: [
          this.chartOptions[0].color ? this.chartOptions[0].color : '#43DC80',
          'rgba(240, 240, 240)',
        ],
        borderWidth: 0,
        hoverOffset: 4
      }],
      options: {
        cutout: (this.chartOptions[0].cutout ? this.chartOptions[0].cutout : '90') + '%',
      },
    };
    setTimeout(() => {
      new Chart(`doughnutChart${this.index}`, {
        type: 'doughnut',
        data: cricleChart,
        options: cricleChart.options
      });
    }, 500);
  }

}
