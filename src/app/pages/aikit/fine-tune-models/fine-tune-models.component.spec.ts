import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineTuneModelsComponent } from './fine-tune-models.component';

describe('FineTuneModelsComponent', () => {
  let component: FineTuneModelsComponent;
  let fixture: ComponentFixture<FineTuneModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FineTuneModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineTuneModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
