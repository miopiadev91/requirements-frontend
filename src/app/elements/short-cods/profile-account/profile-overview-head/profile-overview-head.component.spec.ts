import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOverviewHeadComponent } from './profile-overview-head.component';

describe('ProfileOverviewHeadComponent', () => {
  let component: ProfileOverviewHeadComponent;
  let fixture: ComponentFixture<ProfileOverviewHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOverviewHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileOverviewHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
