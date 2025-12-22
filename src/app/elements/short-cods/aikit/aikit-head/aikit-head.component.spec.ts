import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AikitHeadComponent } from './aikit-head.component';

describe('AikitHeadComponent', () => {
  let component: AikitHeadComponent;
  let fixture: ComponentFixture<AikitHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AikitHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AikitHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
