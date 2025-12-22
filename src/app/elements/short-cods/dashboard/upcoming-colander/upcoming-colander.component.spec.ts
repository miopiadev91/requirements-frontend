import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingColanderComponent } from './upcoming-colander.component';

describe('UpcomingColanderComponent', () => {
  let component: UpcomingColanderComponent;
  let fixture: ComponentFixture<UpcomingColanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingColanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingColanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
