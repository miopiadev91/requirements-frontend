import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditProfileComponent } from './app-edit-profile.component';

describe('AppEditProfileComponent', () => {
  let component: AppEditProfileComponent;
  let fixture: ComponentFixture<AppEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEditProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
