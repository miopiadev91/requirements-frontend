import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountReferralsComponent } from './account-referrals.component';

describe('AccountReferralsComponent', () => {
  let component: AccountReferralsComponent;
  let fixture: ComponentFixture<AccountReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountReferralsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
