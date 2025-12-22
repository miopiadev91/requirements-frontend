import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProjectsDetailsComponent } from './profile-projects-details.component';

describe('ProfileProjectsDetailsComponent', () => {
  let component: ProfileProjectsDetailsComponent;
  let fixture: ComponentFixture<ProfileProjectsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileProjectsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileProjectsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
