import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOverviewHeadComponent } from './account-overview-head.component';

describe('AccountOverviewHeadComponent', () => {
  let component: AccountOverviewHeadComponent;
  let fixture: ComponentFixture<AccountOverviewHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountOverviewHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountOverviewHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
