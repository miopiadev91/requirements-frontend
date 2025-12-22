import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-active-users',
  standalone: true,
  imports: [],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent {

  @ViewChild('chart1')
  private chartRef!: ElementRef;
  private chart!: Chart;
  private readonly data: any;

  all_data: any;
  constructor() {
    this.data = [33, 22, 68, 54, 8, 30, 74, 7, 54, 8, 10, 12, 68, 54, 8];
  }

  ngAfterViewInit(): void {
    this.all_data = this.chartOptions;
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: this.all_data.labels,
        datasets: [
          {
            label: "My First dataset",
            data: this.data,
            borderColor: '#0d99ff',
            barPercentage: 0.7,
            backgroundColor: '#0d99ff'
          }
        ]
      },
      options: this.all_data.options
    });
  }
  ngOnInit() {
    setInterval(() => {
      this.data.push(
        Math.floor(10 + Math.random() * 80)
      );
      this.data.shift();
      this.chart.update();
    }, 2000);
  }

  chartOptions = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", '11', '12', "13", '14', '15'],
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          display: false,
        }
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          display: false
        }
      },
    },
  }
}
