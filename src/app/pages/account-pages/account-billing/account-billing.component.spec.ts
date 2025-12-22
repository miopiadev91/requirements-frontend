import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBillingComponent } from './account-billing.component';

describe('AccountBillingComponent', () => {
  let component: AccountBillingComponent;
  let fixture: ComponentFixture<AccountBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountBillingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
