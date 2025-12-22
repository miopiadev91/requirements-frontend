import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellingListComponent } from './best-selling-list.component';

describe('BestSellingListComponent', () => {
  let component: BestSellingListComponent;
  let fixture: ComponentFixture<BestSellingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
