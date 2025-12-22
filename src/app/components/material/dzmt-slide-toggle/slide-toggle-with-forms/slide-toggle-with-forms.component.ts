import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggle-with-forms',
  templateUrl: './slide-toggle-with-forms.component.html',
  styleUrl: './slide-toggle-with-forms.component.css',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    FormsModule,
    _MatSlideToggleRequiredValidatorModule,
    MatButtonModule,
    MatDivider,
    ReactiveFormsModule,
  ],
})
export class SlideToggleWithFormsComponent {
  private _formBuilder = inject(FormBuilder);
  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
