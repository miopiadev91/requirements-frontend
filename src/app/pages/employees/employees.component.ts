import { Component } from '@angular/core';
import { EmployeesListComponent } from '../../elements/short-cods/dashboard/employees-list/employees-list.component';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    EmployeesListComponent
  ],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  breadcrumbList = {
    title: 'Employee',
    breadcrumb_path: 'Home',
    currentURL: 'employee',
  }
}
