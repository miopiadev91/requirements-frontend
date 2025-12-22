import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { CurrencyPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

interface type {
  img: string,
  title: string,
  price: number,
  rating: number
}
@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [NgClass, CurrencyPipe, RouterLink, BreadcrumbComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
  breadcrumbList = {
    breadcrumb_path: 'Shop',
    currentURL: 'Product Grid',
  }

  productItems: type[] = [
    {
      img: 'assets/images/product/1.jpg',
      title: 'Bonorum et Malorum',
      price: 761,
      rating: 4
    },
    {
      img: 'assets/images/product/2.jpg',
      title: 'Striped Dress',
      price: 159,
      rating: 3
    },
    {
      img: 'assets/images/product/3.jpg',
      title: 'BBow polka-dot',
      price: 357,
      rating: 5
    },
    {
      img: 'assets/images/product/4.jpg',
      title: 'Z Product 360',
      price: 654,
      rating: 3
    },
    {
      img: 'assets/images/product/5.jpg',
      title: 'Chair Grey',
      price: 369,
      rating: 5
    },
    {
      img: 'assets/images/product/6.jpg',
      title: 'fox sake withe',
      price: 245,
      rating: 2
    },
    {
      img: 'assets/images/product/7.jpg',
      title: 'Back Bag',
      price: 364,
      rating: 4
    },
    {
      img: 'assets/images/product/1.jpg',
      title: 'FLARE DRESS',
      price: 548,
      rating: 3
    },
    {
      img: 'assets/images/product/4.jpg',
      title: 'Z Product 360',
      price: 654,
      rating: 3
    },
    {
      img: 'assets/images/product/7.jpg',
      title: 'Back Bag',
      price: 364,
      rating: 4
    },
    {
      img: 'assets/images/product/4.jpg',
      title: 'Z Product 360',
      price: 654,
      rating: 3
    },
    {
      img: 'assets/images/product/1.jpg',
      title: 'FLARE DRESS',
      price: 548,
      rating: 3
    }
  ]
}
