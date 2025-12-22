import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-aikit-head',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './aikit-head.component.html',
  styleUrl: './aikit-head.component.css'
})
export class AikitHeadComponent {

  @Input() data: any = null;

  currentUrl: string = '';
  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }
}
