import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [
    BreadcrumbComponent
  ],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.css'
})
export class SvgIconComponent {
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Home',
    currentURL: 'SVG Icons',
  }
}
