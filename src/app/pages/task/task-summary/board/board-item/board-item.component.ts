import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../../../../../elements/dropdown/dropdown.component';

@Component({
  selector: 'app-board-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    DropdownComponent
  ],
  templateUrl: './board-item.component.html',
  styleUrl: './board-item.component.css'
})
export class BoardItemComponent {
  @Input() item: any;
  @Input() textColor: any;
  @Output() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();
  @Output() emitCardItem: EventEmitter<{ card: any; increase: boolean }> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();

  commentInput = ''
  open = false;
  constructor() { }

  ngOnInit(): void { }

  onOpenComment() {
    this.open = !this.open
  }

  onCommentTextEmit(id: number) {
    this.emitText.emit({ id, text: this.commentInput });
    this.commentInput = ''
  }

  onCardItemEmit(card: any, increase: boolean) {
    this.emitCardItem.emit({ card, increase });
  }

  onCardDelete(id: number) {
    this.emitDeleteCard.emit(id)
  }
  dropdown_status1 = {
    style_status: true,
    value: ['Complete', 'Pending', 'Testing', 'In Progress']
  }
  dropdown_status2 = {
    style_status: true,
    value: ['High', 'Medium', 'Low']
  }
}
