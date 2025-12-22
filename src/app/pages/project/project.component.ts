import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';
import { DropdownComponent } from '../../elements/dropdown/dropdown.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    DropdownComponent,
    RouterLink
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  breadcrumbList = {
    title: 'Task',
    breadcrumb_path: 'Home',
    currentURL: 'Projects',
  }
  dropdown_status1 = {
    select: 'In Progress',
    style_status: true,
    value: ['In Progress', 'Pending', 'Testing', 'Complete']
  }
  dropdown_status2 = {
    select: 'Pending',
    style_status: true,
    value: ['Pending', 'In Progress', 'Testing', 'Complete']
  }

  ngOnInit(): void {
    this.startCounting();
  }

  counter: number = 0;
  startCounting(): void {
    if (this.counter <= 25) {
      this.counter++;
      setTimeout(() => {
        this.startCounting();
      }, 1000);
    }
  }
}
