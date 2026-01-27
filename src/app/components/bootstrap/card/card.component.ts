import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  breadcrumbList = {
    subTitle: 'Card',
    breadcrumb_path: 'Bootstrap',
    currentURL: 'Card',
  }
}
