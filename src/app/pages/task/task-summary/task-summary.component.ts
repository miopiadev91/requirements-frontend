import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../../elements/breadcrumb/breadcrumb.component';
import { DropdownComponent } from '../../../elements/dropdown/dropdown.component';
import { BoardComponent } from './board/board/board.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { BoardService } from './services/board.service';
@Component({
  selector: 'app-task-summary',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbComponent,
    DropdownComponent,
    BoardComponent,
    DialogComponent
  ],
  templateUrl: './task-summary.component.html',
  styleUrl: './task-summary.component.css'
})
export class TaskSummaryComponent {
  breadcrumbList = {
    title: 'Task',
    breadcrumb_path: 'Home',
    currentURL: 'Task Summary',
  }
  dropdown_status1 = {
    style_status: true,
    value: ['Complete', 'Pending', 'Testing', 'In Progress']
  }
  dropdown_status2 = {
    style_status: true,
    value: ['High', 'Medium', 'Low']
  }
  constructor(public boardService: BoardService) { }

  addColumn(event: any) {
    if (event) {
      this.boardService.addColumn(event)
    }
  }
}
