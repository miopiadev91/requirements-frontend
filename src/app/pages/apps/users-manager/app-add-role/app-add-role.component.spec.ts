import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddRoleComponent } from './app-add-role.component';

describe('AppAddRoleComponent', () => {
  let component: AppAddRoleComponent;
  let fixture: ComponentFixture<AppAddRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAddRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAddRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
