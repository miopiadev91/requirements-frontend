import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule,
    NgClass
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() dropdown: any | undefined;
  @Input() active_value?: any | undefined = 'Select';
  getValue: any = '';
  getValueImg: any = '';
  selectValue: string = 'Select';
  style_status: boolean = false;
  ngOnInit() {
    this.getValue = this.dropdown.value;
    this.getValueImg = this.dropdown.image;
    this.style_status = this.dropdown.style_status;
    this.selectValue = this.dropdown.select ? this.dropdown.select : this.active_value;
  }
  getValueDrop(get: any) {
    this.selectValue = get.item;
  }
}
