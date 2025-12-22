import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Select2Component } from '../../../../plugins/select2/select2.component';

@Component({
  selector: 'app-app-edit-profile',
  standalone: true,
  imports: [
    RouterLink,
    Select2Component
  ],
  templateUrl: './app-edit-profile.component.html',
  styleUrl: './app-edit-profile.component.css'
})
export class AppEditProfileComponent {

  selectGender = [
    {
      name: 'Please select',
    },
    {
      name: 'Male',
    },
    {
      name: 'Female',
    },
    {
      name: 'Other',
    }
  ];
  selectCountry = [
    {
      name: 'Please select',
    },
    {
      name: 'Russia',
    },
    {
      name: 'Canada',
    },
    {
      name: 'China',
    },
    {
      name: 'India',
    }
  ];
  selectCity = [
    {
      name: 'Please select',
    },
    {
      name: 'Krasnodar',
    },
    {
      name: 'Tyumen',
    },
    {
      name: 'Chelyabinsk',
    },
    {
      name: 'Moscow',
    }
  ];
}
