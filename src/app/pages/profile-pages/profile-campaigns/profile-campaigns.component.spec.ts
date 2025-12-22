import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCampaignsComponent } from './profile-campaigns.component';

describe('ProfileCampaignsComponent', () => {
  let component: ProfileCampaignsComponent;
  let fixture: ComponentFixture<ProfileCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCampaignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
