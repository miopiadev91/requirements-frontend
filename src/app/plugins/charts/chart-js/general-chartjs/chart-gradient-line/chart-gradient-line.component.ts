import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-gradient-line',
  standalone: true,
  imports: [],
  templateUrl: './chart-gradient-line.component.html',
  styleUrl: './chart-gradient-line.component.css'
})
export class ChartGradientLineComponent {
  ngOnInit() {
    let width: any = '';
    let height: any = '';
    let gradient: any = '';
    function getGradient(ctx: any, chartArea: any) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (!gradient || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0.9, '#1eaae7');
        gradient.addColorStop(0.5, '#0D99FF');
        gradient.addColorStop(0.3, 'rgba(14, 138, 116, 0.5)');
      }
      return gradient;
    }
    const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6']
    const dataBar = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: [35, 80, 21, 95, 62, 10],
          borderColor: function (context: any) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              // This case happens on initial chart load
              return;
            }
            return getGradient(ctx, chartArea);
          }
        }
      ]
    };

    new Chart('chart-gradient-line', {
      type: 'line',
      data: dataBar,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      }
    });
  }
}
