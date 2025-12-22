import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../../elements/breadcrumb/breadcrumb.component';
import { CommonModule} from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CmsSimilarProductsComponent } from '../../../../elements/short-cods/apps/cms-similar-products/cms-similar-products.component';

interface type {
  img: string;
  title: string;
  discount: number;
  price: number;
  ratings?: number;
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    NgbModule,
    CommonModule,
    BreadcrumbComponent,
    CmsSimilarProductsComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  active = 1 ;

  breadcrumbList = {
    breadcrumb_path: 'Shop',
    currentURL: 'Product Detail',
  }

  constructor(private modalService: NgbModal) { }

  open(content: any) {
    this.modalService.open(content, { centered: false });
  }

  productData:type[] = [
    {
      img: 'assets/images/product/1.jpg',
      title: 'Bonorum et Malorum',
      discount: 761,
      price: 159,
      ratings: 3
    },
    {
      img: 'assets/images/product/2.jpg',
      title: 'Bonorum et Malorum',
      discount: 159,
      price: 159,
      ratings: 5
    },
    {
      img: 'assets/images/product/3.jpg',
      title: 'Bonorum et Malorum',
      discount: 357,
      price: 159,
      ratings: 5
    },
    {
      img: 'assets/images/product/4.jpg',
      title: 'Bonorum et Malorum',
      discount: 654,
      price: 159,
      ratings: 3
    },
    {
      img: 'assets/images/product/5.jpg',
      title: 'Bonorum et Malorum',
      discount: 369,
      price: 149,
      ratings: 5
    },
    {
      img: 'assets/images/product/6.jpg',
      title: 'Bonorum  Malorum withe',
      discount: 240,
      price: 149,
      ratings: 4
    },
    {
      img: 'assets/images/product/7.jpg',
      title: 'Bonorum et Malorum',
      discount: 364,
      price: 159,
      ratings: 2
    },
    {
      img: 'assets/images/product/1.jpg',
      title: 'FLARE et Malorum',
      discount: 654,
      price: 159,
      ratings: 4
    },
    {
      img: 'assets/images/product/2.jpg',
      title: 'Sake et Malorum',
      discount: 369.00,
      price: 149,
      ratings: 5
    },
    {
      img: 'assets/images/product/5.jpg',
      title: 'Bonorum et Malorum',
      discount: 240,
      price: 149,
      ratings: 3
    },
  ]
}
