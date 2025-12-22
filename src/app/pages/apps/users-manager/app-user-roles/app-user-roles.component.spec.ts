import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserRolesComponent } from './app-user-roles.component';

describe('AppUserRolesComponent', () => {
  let component: AppUserRolesComponent;
  let fixture: ComponentFixture<AppUserRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
