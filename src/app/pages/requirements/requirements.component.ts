import { Component, DestroyRef, inject, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSortModule, Sort } from '@angular/material/sort';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';

import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { PaginationComponent } from '../../elements/pagination/pagination.component';
import { RequirementsService, RequirementsFilter } from '../../services/requirements/requirements.service';
import { NgxToastrService } from '../../_services/ngx-toastr/ngx-toastr.service';
import {
  Requirement,
  RequirementStatus,
  RequirementType,
  Priority,
  STATUS_LABELS,
  STATUS_COLORS,
  PRIORITY_LABELS,
  PRIORITY_COLORS,
  TYPE_LABELS,
  TYPE_COLORS,
  WORKFLOW_TRANSITIONS
} from '../../models/requirement.model';

@Component({
  selector: 'app-requirements',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatSortModule,
    BreadcrumbComponent,
    PaginationComponent
  ],
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.css'
})
export class RequirementsComponent implements OnInit {

  private requirementsService = inject(RequirementsService);
  private toastrService = inject(NgxToastrService);
  private modalService = inject(NgbModal);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  breadcrumb = {
    title: 'Requerimientos',
    breadcrumb_path: 'Home',
    currentURL: 'requerimientos',
  };

  // Data
  requirements: Requirement[] = [];
  allData: any = { data: [], total_pages: 0 };
  page = 1;
  totalPage = 0;
  totalRows = 10;
  loading = false;

  // Filters
  filterStatus: RequirementStatus | '' = '';
  filterPriority: Priority | '' = '';
  filterType: RequirementType | '' = '';
  searchTerm = '';

  // Form
  requirementForm!: FormGroup;
  isEditing = false;
  editingId: number | null = null;

  // Labels
  statusLabels = STATUS_LABELS;
  statusColors = STATUS_COLORS;
  priorityLabels = PRIORITY_LABELS;
  priorityColors = PRIORITY_COLORS;
  typeLabels = TYPE_LABELS;
  typeColors = TYPE_COLORS;
  workflowTransitions = WORKFLOW_TRANSITIONS;

  // Options for selects
  statusOptions: RequirementStatus[] = ['draft', 'pending', 'in_review', 'approved', 'rejected', 'in_progress', 'completed'];
  priorityOptions: Priority[] = ['low', 'medium', 'high', 'critical'];
  typeOptions: RequirementType[] = ['feature', 'bug', 'improvement', 'support'];

  ngOnInit(): void {
    this.initForm();
    this.loadRequirements();
  }

  initForm(): void {
    this.requirementForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      type: ['feature', [Validators.required]],
      priority: ['medium', [Validators.required]],
      assignedTo: [''],
      dueDate: ['']
    });
  }

  loadRequirements(): void {
    this.loading = true;
    const filters: RequirementsFilter = {
      page: this.page,
      limit: this.totalRows
    };

    if (this.filterStatus) filters.status = this.filterStatus;
    if (this.filterPriority) filters.priority = this.filterPriority;
    if (this.filterType) filters.type = this.filterType;
    if (this.searchTerm) filters.search = this.searchTerm;

    this.requirementsService.getAll(filters)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          this.requirements = response.data;
          this.allData = {
            data: response.data,
            total_pages: response.totalPages
          };
          this.totalPage = response.totalPages;
          this.loading = false;
        },
        error: () => {
          this.toastrService.error('Error al cargar requerimientos', 'Error');
          this.loading = false;
        }
      });
  }

  onFilterChange(): void {
    this.page = 1;
    this.loadRequirements();
  }

  onSearch(): void {
    this.page = 1;
    this.loadRequirements();
  }

  clearFilters(): void {
    this.filterStatus = '';
    this.filterPriority = '';
    this.filterType = '';
    this.searchTerm = '';
    this.page = 1;
    this.loadRequirements();
  }

  pageChange(newPage: number): void {
    this.page = newPage;
    this.loadRequirements();
  }

  sortData(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      return;
    }
    // El ordenamiento se manejará en el backend
    this.loadRequirements();
  }

  openCreateModal(content: TemplateRef<any>): void {
    this.isEditing = false;
    this.editingId = null;
    this.requirementForm.reset({
      type: 'feature',
      priority: 'medium'
    });
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  openEditModal(content: TemplateRef<any>, requirement: Requirement): void {
    this.isEditing = true;
    this.editingId = requirement.id;
    this.requirementForm.patchValue({
      title: requirement.title,
      description: requirement.description,
      type: requirement.type,
      priority: requirement.priority,
      assignedTo: requirement.assignedTo || '',
      dueDate: requirement.dueDate ? new Date(requirement.dueDate).toISOString().split('T')[0] : ''
    });
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  saveRequirement(modal: any): void {
    if (this.requirementForm.invalid) {
      this.requirementForm.markAllAsTouched();
      return;
    }

    const data = this.requirementForm.value;

    if (this.isEditing && this.editingId) {
      this.requirementsService.update(this.editingId, data)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: () => {
            this.toastrService.success('Requerimiento actualizado', 'Éxito');
            modal.dismiss();
            this.loadRequirements();
          },
          error: () => {
            this.toastrService.error('Error al actualizar', 'Error');
          }
        });
    } else {
      this.requirementsService.create(data)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: () => {
            this.toastrService.success('Requerimiento creado', 'Éxito');
            modal.dismiss();
            this.loadRequirements();
          },
          error: () => {
            this.toastrService.error('Error al crear', 'Error');
          }
        });
    }
  }

  changeStatus(requirement: Requirement, newStatus: RequirementStatus): void {
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
      if (result.isConfirmed) {
        this.requirementsService.updateStatus(requirement.id, newStatus)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: () => {
              this.toastrService.success('Estado actualizado', 'Éxito');
              this.loadRequirements();
            },
            error: () => {
              this.toastrService.error('Error al actualizar estado', 'Error');
            }
          });
      }
    });
  }

  deleteRequirement(requirement: Requirement): void {
    Swal.fire({
      title: '¿Eliminar requerimiento?',
      text: `¿Está seguro de eliminar "${requirement.title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6e7881',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.requirementsService.delete(requirement.id)
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: () => {
              this.toastrService.success('Requerimiento eliminado', 'Éxito');
              this.loadRequirements();
            },
            error: () => {
              this.toastrService.error('Error al eliminar', 'Error');
            }
          });
      }
    });
  }

  getAvailableTransitions(status: RequirementStatus): RequirementStatus[] {
    return this.workflowTransitions[status] || [];
  }

  getTypeLabel(type: string): string {
    return this.typeLabels[type as RequirementType] || type;
  }

  getTypeColor(type: string): string {
    return this.typeColors[type as RequirementType] || 'secondary';
  }

  getPriorityLabel(priority: string): string {
    return this.priorityLabels[priority as Priority] || priority;
  }

  getPriorityColor(priority: string): string {
    return this.priorityColors[priority as Priority] || 'secondary';
  }

  getStatusLabel(status: string): string {
    return this.statusLabels[status as RequirementStatus] || status;
  }

  getStatusColor(status: string): string {
    return this.statusColors[status as RequirementStatus] || 'secondary';
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
