import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import Swal from 'sweetalert2';

import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { RequirementsService } from '../../../services/requirements/requirements.service';
import { NgxToastrService } from '../../../_services/ngx-toastr/ngx-toastr.service';
import {
  Requirement,
  RequirementStatus,
  STATUS_LABELS,
  STATUS_COLORS,
  PRIORITY_LABELS,
  PRIORITY_COLORS,
  TYPE_LABELS,
  TYPE_COLORS,
  WORKFLOW_TRANSITIONS
} from '../../../models/requirement.model';

@Component({
  selector: 'app-requirement-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    BreadcrumbComponent
  ],
  templateUrl: './requirement-detail.component.html',
  styleUrl: './requirement-detail.component.css'
})
export class RequirementDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private requirementsService = inject(RequirementsService);
  private toastrService = inject(NgxToastrService);
  private destroyRef = inject(DestroyRef);

  breadcrumb = {
    title: 'Detalle de Requerimiento',
    breadcrumb_path: 'Requerimientos',
    currentURL: 'detalle',
  };

  requirement: Requirement | null = null;
  loading = true;
  newComment = '';

  // Labels
  statusLabels = STATUS_LABELS;
  statusColors = STATUS_COLORS;
  priorityLabels = PRIORITY_LABELS;
  priorityColors = PRIORITY_COLORS;
  typeLabels = TYPE_LABELS;
  typeColors = TYPE_COLORS;
  workflowTransitions = WORKFLOW_TRANSITIONS;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadRequirement(+id);
    }
  }

  loadRequirement(id: number): void {
    this.loading = true;
    this.requirementsService.getById(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.requirement = data;
          this.breadcrumb.title = data.code;
          this.loading = false;
        },
        error: () => {
          this.toastrService.error('Error al cargar el requerimiento', 'Error');
          this.router.navigate(['/admin/requirements']);
        }
      });
  }

  getAvailableTransitions(): RequirementStatus[] {
    if (!this.requirement) return [];
    return this.workflowTransitions[this.requirement.status] || [];
  }

  changeStatus(newStatus: RequirementStatus): void {
    if (!this.requirement) return;

    Swal.fire({
      title: '¿Cambiar estado?',
      text: `¿Desea cambiar el estado a "${this.statusLabels[newStatus]}"?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#ff5c00',
      cancelButtonColor: '#6e7881',
      confirmButtonText: 'Sí, cambiar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed && this.requirement) {
        this.requirementsService.updateStatus(this.requirement.id, newStatus)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: (updated) => {
              this.requirement = updated;
              this.toastrService.success('Estado actualizado', 'Éxito');
            },
            error: () => {
              this.toastrService.error('Error al actualizar estado', 'Error');
            }
          });
      }
    });
  }

  addComment(): void {
    if (!this.requirement || !this.newComment.trim()) return;

    this.requirementsService.addComment(this.requirement.id, this.newComment)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (updated) => {
          this.requirement = updated;
          this.newComment = '';
          this.toastrService.success('Comentario agregado', 'Éxito');
        },
        error: () => {
          this.toastrService.error('Error al agregar comentario', 'Error');
        }
      });
  }

  deleteRequirement(): void {
    if (!this.requirement) return;

    Swal.fire({
      title: '¿Eliminar requerimiento?',
      text: `¿Está seguro de eliminar "${this.requirement.title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6e7881',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed && this.requirement) {
        this.requirementsService.delete(this.requirement.id)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: () => {
              this.toastrService.success('Requerimiento eliminado', 'Éxito');
              this.router.navigate(['/admin/requirements']);
            },
            error: () => {
              this.toastrService.error('Error al eliminar', 'Error');
            }
          });
      }
    });
  }
}
