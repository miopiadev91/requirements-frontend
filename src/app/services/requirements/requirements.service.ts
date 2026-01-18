import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Requirement,
  RequirementStats,
  CreateRequirementDto,
  UpdateRequirementDto,
  RequirementStatus
} from '../../models/requirement.model';

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface RequirementsFilter {
  status?: RequirementStatus;
  priority?: string;
  type?: string;
  search?: string;
  page?: number;
  limit?: number;
}

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  private readonly apiUrl = `${environment.apiUrl}/requirements`;
  private readonly http = inject(HttpClient);

  public requirements = signal<Requirement[]>([]);
  public loading = signal<boolean>(false);
  public stats = signal<RequirementStats | null>(null);

  getAll(filters?: RequirementsFilter): Observable<PaginatedResponse<Requirement>> {
    let params = new HttpParams();

    if (filters) {
      if (filters.status) params = params.set('status', filters.status);
      if (filters.priority) params = params.set('priority', filters.priority);
      if (filters.type) params = params.set('type', filters.type);
      if (filters.search) params = params.set('search', filters.search);
      if (filters.page) params = params.set('page', filters.page.toString());
      if (filters.limit) params = params.set('limit', filters.limit.toString());
    }

    return this.http.get<PaginatedResponse<Requirement>>(this.apiUrl, { params });
  }

  getById(id: number): Observable<Requirement> {
    return this.http.get<Requirement>(`${this.apiUrl}/${id}`);
  }

  create(data: CreateRequirementDto): Observable<Requirement> {
    return this.http.post<Requirement>(this.apiUrl, data);
  }

  update(id: number, data: UpdateRequirementDto): Observable<Requirement> {
    return this.http.put<Requirement>(`${this.apiUrl}/${id}`, data);
  }

  updateStatus(id: number, status: RequirementStatus): Observable<Requirement> {
    return this.http.patch<Requirement>(`${this.apiUrl}/${id}/status`, { status });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getStats(): Observable<RequirementStats> {
    return this.http.get<RequirementStats>(`${this.apiUrl}/stats`);
  }

  addComment(requirementId: number, text: string): Observable<Requirement> {
    return this.http.post<Requirement>(`${this.apiUrl}/${requirementId}/comments`, { text });
  }
}
