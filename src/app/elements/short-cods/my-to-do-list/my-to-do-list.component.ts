import { Component, Input } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-my-to-do-list',
  standalone: true,
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder],
  templateUrl: './my-to-do-list.component.html',
  styleUrl: './my-to-do-list.component.css'
})
export class MyToDoListComponent {
  @Input() data: any = null;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }
}
