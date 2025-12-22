import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoWriterComponent } from './auto-writer.component';

describe('AutoWriterComponent', () => {
  let component: AutoWriterComponent;
  let fixture: ComponentFixture<AutoWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoWriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
