import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsSimilarProductsComponent } from './cms-similar-products.component';

describe('CmsSimilarProductsComponent', () => {
  let component: CmsSimilarProductsComponent;
  let fixture: ComponentFixture<CmsSimilarProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsSimilarProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmsSimilarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
