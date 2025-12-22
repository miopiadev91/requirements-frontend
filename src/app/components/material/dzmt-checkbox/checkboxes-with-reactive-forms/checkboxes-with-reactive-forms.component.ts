import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-checkboxes-with-reactive-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  templateUrl: './checkboxes-with-reactive-forms.component.html',
  styleUrl: './checkboxes-with-reactive-forms.component.css'
})
export class CheckboxesWithReactiveFormsComponent {
  private _formBuilder = inject(FormBuilder);

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
}
