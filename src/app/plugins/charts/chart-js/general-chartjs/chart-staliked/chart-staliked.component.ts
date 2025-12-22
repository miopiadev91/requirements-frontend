import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-staliked',
  standalone: true,
  imports: [],
  templateUrl: './chart-staliked.component.html',
  styleUrl: './chart-staliked.component.css'
})
export class ChartStalikedComponent {
  chartjs_bar = {
    type: 'bar',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Blue',
        backgroundColor: "#0D99FF",
        barPercentage: 0.5,
        hoverBackgroundColor: "#0D99FF",
        barThickness:40,	
        data: [
          '12',
          '12',
          '12',
          '12',
          '12',
          '12',
          '12'
        ]
      }, {
        label: 'Green',
        backgroundColor: "rgba(120, 120, 120, 1)",
        barPercentage: 0.5,
        hoverBackgroundColor: "rgba(120, 120, 120, 1)",
        barThickness:40,	
        data: [
          '12',
          '12',
          '12',
          '12',
          '12',
          '12',
          '12'
        ]
      }, {
        label: 'Light Green',
        backgroundColor: "rgba(238, 60, 60, 1)",
        barPercentage: 0.5,
        hoverBackgroundColor: "rgba(238, 60, 60, 1)",
        barThickness:40,	
        data: [
          '12',
          '12',
          '12',
          '12',
          '12',
          '12',
          '12'
        ]
      }]

    },
    options: {
      plugins: {
        legend: false,
        tooltips: {
          mode: 'index',
          intersect: false
        },
      },
      title: {
        display: false
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          ticks: {

            color: "#b3b3b3",
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: "#b3b3b3",
          }

        }
      }
    }
  }

  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chartStaliked', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
