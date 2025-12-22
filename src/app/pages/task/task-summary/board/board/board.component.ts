import { Component } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { CommonModule, NgFor } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


import { MatIconModule } from '@angular/material/icon';
import { ColorPanelComponent } from '../color-panel/color-panel.component';
import { BoardItemComponent } from '../board-item/board-item.component';
import { CommentItemComponent } from '../comment-item/comment-item.component';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    DragDropModule,
    ColorPanelComponent,
    BoardItemComponent,
    CommentItemComponent,
    DialogComponent
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  constructor(public boardService: BoardService) { }

  ngOnInit(): void {
    console.log('BOARD - INIT')
  }

  onColorChange(color: string, columnId: number) {
    this.boardService.changeColumnColor(color, columnId)
  }

  onAddCard(text: string, columnId: number) {
    if (text) {
      let position = 'Graphic Deisgner';
      let status = 'In Progress';
      this.boardService.addCard(text, position, status, columnId)
    }
  }

  onDeleteColumn(columnId: number) {
    this.boardService.deleteColumn(columnId)
  }

  onDeleteCard(cardId: number, columnId: number) {
    this.boardService.deleteCard(cardId, columnId)
  }

  onChangeLike(event: { card: any, increase: boolean }, columnId: number) {
    const { card: { id }, increase } = event
    this.boardService.changeLike(id, columnId, increase)
  }

  onAddComment(event: { id: number, text: string }, columnId: number) {
    this.boardService.addComment(columnId, event.id, event.text)
  }

  onDeleteComment(comment: any, columnId: any, item: any) {
    this.boardService.deleteComment(columnId, item.id, comment.id)
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
