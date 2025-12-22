import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../elements/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-blog-1',
  standalone: true,
  imports: [
    BreadcrumbComponent
  ],
  templateUrl: './blog-1.component.html',
  styleUrl: './blog-1.component.css'
})
export class Blog1Component {

  
  breadcrumbList = {
    title: 'Dashboard',
    breadcrumb_path: 'Home',
    currentURL: 'Blog',
  }
}
