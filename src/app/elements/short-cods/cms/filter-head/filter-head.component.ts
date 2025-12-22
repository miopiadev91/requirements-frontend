import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Select2Component } from '../../../../plugins/select2/select2.component';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter-head',
  standalone: true,
  imports: [NgClass, FormsModule, ReactiveFormsModule, NgbModule, Select2Component],
  templateUrl: './filter-head.component.html',
  styleUrl: './filter-head.component.css'
})
export class FilterHeadComponent {

  activeToggleArray = [1, 2]
  dropicon(id: any) {
    console.log('click')
    let index = this.activeToggleArray.indexOf(id);
    if (index == -1) {
      this.activeToggleArray.push(id);
    } else {
      this.activeToggleArray.splice(index, 1);
    }
  }

  navigation = 'arrows';
  outsideDays = 'visible';

  model: NgbDateStruct | undefined;



  selectStatus = [
    {
      name: 'Select Status',
    },
    {
      name: 'Published',
    },
    {
      name: 'Draft',
    },
    {
      name: 'Trash',
    },
    {
      name: 'Pending',
    }
  ];

}
