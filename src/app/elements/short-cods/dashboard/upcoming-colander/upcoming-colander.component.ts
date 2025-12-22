import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-upcoming-colander',
  standalone: true,
  imports: [
    NgbModule,
    FormsModule,
  ],
  templateUrl: './upcoming-colander.component.html',
  styleUrl: './upcoming-colander.component.css'
})
export class UpcomingColanderComponent {

  isCollapsed = false;
  model: NgbDateStruct | undefined;
  navigation = 'arrows';
	outsideDays = 'visible';
	date: { year: number; month: number; } | undefined;

  time = { hour: 13, minute: 30 };
	meridian = true;
}
