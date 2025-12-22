import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-cms-similar-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CarouselModule
  ],
  templateUrl: './cms-similar-products.component.html',
  styleUrl: './cms-similar-products.component.css'
})
export class CmsSimilarProductsComponent {
	@Input() data: any = '';

	customOptions: any = {
		loop: true,
		margin: 20,
		nav: false,
		autoplay: true,
		rtl: true,

		slideSpeed: 3000,
		paginationSpeed: 3000,
		dots: false,
		navText: ['', ''],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 3
			},
			800: {
				items: 3
			},
			991: {
				items: 5
			},
			1200: {
				items: 6
			}
		}
	}
}
