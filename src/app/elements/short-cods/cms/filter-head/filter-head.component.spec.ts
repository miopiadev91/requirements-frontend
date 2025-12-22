import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHeadComponent } from './filter-head.component';

describe('FilterHeadComponent', () => {
  let component: FilterHeadComponent;
  let fixture: ComponentFixture<FilterHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
