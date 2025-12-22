import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepurposeComponent } from './repurpose.component';

describe('RepurposeComponent', () => {
  let component: RepurposeComponent;
  let fixture: ComponentFixture<RepurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepurposeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
