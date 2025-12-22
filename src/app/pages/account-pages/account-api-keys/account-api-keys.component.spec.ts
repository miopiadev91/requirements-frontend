import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountApiKeysComponent } from './account-api-keys.component';

describe('AccountApiKeysComponent', () => {
  let component: AccountApiKeysComponent;
  let fixture: ComponentFixture<AccountApiKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountApiKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountApiKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
