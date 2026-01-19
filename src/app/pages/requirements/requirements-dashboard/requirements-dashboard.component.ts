import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgApexchartsModule } from 'ng-apexcharts';

import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { RequirementsService } from '../../../services/requirements/requirements.service';
import { NgxToastrService } from '../../../_services/ngx-toastr/ngx-toastr.service';
import {
  Requirement,
  RequirementStats,
  RequirementStatus,
  RequirementType,
  Priority,
  STATUS_LABELS,
  STATUS_COLORS,
  PRIORITY_LABELS,
  PRIORITY_COLORS,
  TYPE_LABELS,
  TYPE_COLORS
} from '../../../models/requirement.model';

@Component({
  selector: 'app-requirements-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgApexchartsModule,
    BreadcrumbComponent
  ],
  templateUrl: './requirements-dashboard.component.html',
  styleUrl: './requirements-dashboard.component.css'
})
export class RequirementsDashboardComponent implements OnInit {

  private requirementsService = inject(RequirementsService);
  private toastrService = inject(NgxToastrService);
  private destroyRef = inject(DestroyRef);

  breadcrumb = {
    title: 'Dashboard de Requerimientos',
    breadcrumb_path: 'Requerimientos',
    currentURL: 'dashboard',
  };

  stats: RequirementStats | null = null;
  recentRequirements: Requirement[] = [];
  loading = true;

  statusLabels = STATUS_LABELS;
  statusColors = STATUS_COLORS;
  priorityLabels = PRIORITY_LABELS;
  typeLabels = TYPE_LABELS;

  // Gráfico de estados (Dona)
  statusChartOptions: any = {
    series: [],
    chart: {
      type: 'donut',
      height: 280
    },
    labels: [],
    colors: ['#6c757d', '#ffc107', '#17a2b8', '#28a745', '#dc3545', '#007bff', '#28a745'],
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              formatter: (w: any) => {
                return w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0);
              }
            }
          }
        }
      }
    }
  };

  // Gráfico de prioridades (Barras)
  priorityChartOptions: any = {
    series: [{
      name: 'Requerimientos',
      data: []
    }],
    chart: {
      type: 'bar',
      height: 280,
      toolbar: { show: false }
    },
    colors: ['#6c757d', '#17a2b8', '#ffc107', '#dc3545'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false
      }
    },
    xaxis: {
      categories: []
    },
    legend: { show: false },
    dataLabels: {
      enabled: true
    }
  };

  // Gráfico de tipos (Barras horizontales)
  typeChartOptions: any = {
    series: [{
      name: 'Requerimientos',
      data: []
    }],
    chart: {
      type: 'bar',
      height: 200,
      toolbar: { show: false }
    },
    colors: ['var(--primary)'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    xaxis: {
      categories: []
    },
    dataLabels: {
      enabled: true
    }
  };

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading = true;

    // Cargar estadísticas
    this.requirementsService.getStats()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (stats) => {
          this.stats = stats;
          this.updateCharts();
        },
        error: () => {
          this.toastrService.error('Error al cargar estadísticas', 'Error');
        }
      });

    // Cargar últimos requerimientos
    this.requirementsService.getAll({ limit: 5 })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.recentRequirements = response.data;
          this.loading = false;
        },
        error: () => {
          this.toastrService.error('Error al cargar requerimientos', 'Error');
          this.loading = false;
        }
      });
  }

  updateCharts(): void {
    if (!this.stats) return;

    // Actualizar gráfico de estados
    const statusData = Object.entries(this.stats.byStatus);
    this.statusChartOptions = {
      ...this.statusChartOptions,
      series: statusData.map(([_, value]) => value),
      labels: statusData.map(([key, _]) => this.statusLabels[key as keyof typeof this.statusLabels])
    };

    // Actualizar gráfico de prioridades
    const priorityData = Object.entries(this.stats.byPriority);
    this.priorityChartOptions = {
      ...this.priorityChartOptions,
      series: [{
        name: 'Requerimientos',
        data: priorityData.map(([_, value]) => value)
      }],
      xaxis: {
        categories: priorityData.map(([key, _]) => this.priorityLabels[key as keyof typeof this.priorityLabels])
      }
    };

    // Actualizar gráfico de tipos
    const typeData = Object.entries(this.stats.byType);
    this.typeChartOptions = {
      ...this.typeChartOptions,
      series: [{
        name: 'Requerimientos',
        data: typeData.map(([_, value]) => value)
      }],
      xaxis: {
        categories: typeData.map(([key, _]) => this.typeLabels[key as keyof typeof this.typeLabels])
      }
    };
  }

  getStatusCount(status: string): number {
    if (!this.stats) return 0;
    return this.stats.byStatus[status as keyof typeof this.stats.byStatus] || 0;
  }

  getTypeLabel(type: string): string {
    return TYPE_LABELS[type as RequirementType] || type;
  }

  getPriorityLabel(priority: string): string {
    return PRIORITY_LABELS[priority as Priority] || priority;
  }

  getStatusLabel(status: string): string {
    return STATUS_LABELS[status as RequirementStatus] || status;
  }

  getStatusColor(status: string): string {
    return STATUS_COLORS[status as RequirementStatus] || 'secondary';
  }
}
