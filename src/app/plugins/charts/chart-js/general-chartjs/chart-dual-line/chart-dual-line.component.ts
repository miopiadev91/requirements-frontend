import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-dual-line',
  standalone: true,
  imports: [],
  templateUrl: './chart-dual-line.component.html',
  styleUrl: './chart-dual-line.component.css'
})
export class ChartDualLineComponent {
  chartjs_bar = {
    type: 'line',
    data: {
      defaultFontFamily: 'Poppins',
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "My First dataset",
          data: [25, 20, 60, 41, 66, 45, 80],
          borderColor: "rgba(255, 92, 0, 1)",
          borderWidth: "2",
          backgroundColor: 'transparent', 
          tension:0.5,
          pointBackgroundColor: 'rgba(14, 138, 116, 0.5)'
        }, {
          label: "My First dataset",
          data: [5, 20, 15, 41, 35, 65, 80],
          borderColor: "#0D99FF ",
          borderWidth: "2",
          backgroundColor: 'transparent', 
          tension:0.5,
          pointBackgroundColor: 'rgba(254, 176, 25, 1)'
        }
      ]
    },
    options: {
      plugins:{
        legend:false,
        
      },
      scales: {
        y: {
          max: 100, 
          min: 0, 
          ticks: {
            beginAtZero: true, 
            stepSize: 20, 
            padding: 10,
            color:"#b3b3b3",
          }
        },
        x:{ 
          ticks: {
            padding: 5,
            color:"#b3b3b3",
          }
        }
      }
    }
  }

  all_data: any;
  ngOnInit() {
    this.all_data = this.chartjs_bar;
    new Chart('chartDualline', {
      type: this.all_data.type,
      data: this.all_data.data,
      options: this.all_data.options,
    });
  }
}
