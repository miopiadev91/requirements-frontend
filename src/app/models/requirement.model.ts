export interface Requirement {
  id: number;
  code: string;
  title: string;
  description: string;
  type: RequirementType;
  priority: Priority;
  status: RequirementStatus;
  requestedBy: string;
  assignedTo?: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
  attachments?: string[];
  comments?: RequirementComment[];
}

export type RequirementType = 'feature' | 'bug' | 'improvement' | 'support';
export type Priority = 'low' | 'medium' | 'high' | 'critical';
export type RequirementStatus =
  | 'draft'
  | 'pending'
  | 'in_review'
  | 'approved'
  | 'rejected'
  | 'in_progress'
  | 'completed';

export interface RequirementComment {
  id: number;
  userId: string;
  userName: string;
  text: string;
  createdAt: Date;
}

export interface RequirementStats {
  total: number;
  byStatus: Record<RequirementStatus, number>;
  byPriority: Record<Priority, number>;
  byType: Record<RequirementType, number>;
}

export interface CreateRequirementDto {
  title: string;
  description: string;
  type: RequirementType;
  priority: Priority;
  assignedTo?: string;
  dueDate?: Date;
}

export interface UpdateRequirementDto extends Partial<CreateRequirementDto> {
  status?: RequirementStatus;
}

export const STATUS_LABELS: Record<RequirementStatus, string> = {
  draft: 'Borrador',
  pending: 'Pendiente',
  in_review: 'En Revisión',
  approved: 'Aprobado',
  rejected: 'Rechazado',
  in_progress: 'En Progreso',
  completed: 'Completado'
};

export const STATUS_COLORS: Record<RequirementStatus, string> = {
  draft: 'secondary',
  pending: 'warning',
  in_review: 'info',
  approved: 'success',
  rejected: 'danger',
  in_progress: 'primary',
  completed: 'success'
};

export const PRIORITY_LABELS: Record<Priority, string> = {
  low: 'Baja',
  medium: 'Media',
  high: 'Alta',
  critical: 'Crítica'
};

export const PRIORITY_COLORS: Record<Priority, string> = {
  low: 'secondary',
  medium: 'info',
  high: 'warning',
  critical: 'danger'
};

export const TYPE_LABELS: Record<RequirementType, string> = {
  feature: 'Nueva Funcionalidad',
  bug: 'Error',
  improvement: 'Mejora',
  support: 'Soporte'
};

export const TYPE_COLORS: Record<RequirementType, string> = {
  feature: 'primary',
  bug: 'danger',
  improvement: 'info',
  support: 'secondary'
};

export const WORKFLOW_TRANSITIONS: Record<RequirementStatus, RequirementStatus[]> = {
  draft: ['pending'],
  pending: ['in_review', 'rejected'],
  in_review: ['approved', 'rejected'],
  approved: ['in_progress'],
  rejected: ['draft'],
  in_progress: ['completed'],
  completed: []
};
