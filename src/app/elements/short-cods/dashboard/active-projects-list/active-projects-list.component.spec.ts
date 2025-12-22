import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProjectsListComponent } from './active-projects-list.component';

describe('ActiveProjectsListComponent', () => {
  let component: ActiveProjectsListComponent;
  let fixture: ComponentFixture<ActiveProjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveProjectsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
