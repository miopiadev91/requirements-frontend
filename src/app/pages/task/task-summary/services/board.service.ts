import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column, Comment } from '../models/column.model';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private initBoard = [
    {
      id: 1,
      title: 'To Do',
      color: 'rgb(237 223 255 / 50%)',
      bg: 'primary',
      list: [
        {
          id: 1,
          text: 'Prepare proposal for client meeting',
          position: 'Graphic Deisgner',
          status:'Testing',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'Some comment'
            }
          ]
        },
        {
          id: 4,
          text: 'HTML template Issue Complete',
          position: 'Graphic Deisgner',
          status:'Complete',
          like: 1,
          comments: [
            {
              id: 4,
              text: 'Some comment'
            }
          ]
        },
        {
          id: 5,
          text: 'HTML template Issue Complete',
          position: 'Database Engineer',
          status:'Pending',
          like: 1,
          comments: [
            {
              id: 4,
              text: 'Some comment'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'On Progress',
      color: 'rgb(255 237 210 / 50%)',
      bg: 'warning',
      list: [
        {
          id: 1,
          text: 'HTML template Issue Complete',
          position: 'Graphic Deisgner',
          status:'Pending',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'Some comment'
            }
          ]
        },
        {
          id: 2,
          text: 'HTML template Issue Complete',
          position: 'UX Writer',
          status:'Complete',
          like: 1,
          comments: [
            {
              id: 2,
              text: 'Some comment'
            }
          ]
        },
      ]
    },
    {
      id: 3,
      title: 'Done',
      color: 'rgb(211 230 249 / 50%)',
      bg: 'success',
      list: [
        {
          id: 1,
          text: 'HTML template Issue Complete',
          position: 'Digital Marketing',
          status:'In Progress',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'Some comment'
            }
          ]
        },
        {
          id: 2,
          text: 'HTML template Issue Complete',
          position: 'Database Engineer',
          status:'Testing',
          like: 1,
          comments: [
            {
              id: 2,
              text: 'Some comment'
            }
          ]
        },
        {
          id: 3,
          text: 'HTML template Issue Complete',
          position: 'Public Relations',
          status:'Complete',
          like: 1,
          comments: [
            {
              id: 2,
              text: 'Some comment'
            }
          ]
        },
      ]
    },
    {
      id: 4,
      title: 'Revised',
      color: 'rgb(208 251 225 / 50%)',
      bg: 'purple',
      list: [
        {
          id: 1,
          text: 'Prepare proposal for client meeting',
          position: 'Graphic Deisgner',
          like: 1,
          status:'Complete',
          comments: [
            {
              id: 1,
              text: 'Some comment'
            }
          ]
        },
      ]
    },
    {
      id: 5,
      title: 'On Progress',
      color: 'rgb(255 214 211 / 50%)',
      bg: 'danger',
      list: [
        {
          id: 1,
          text: 'HTML template Issue Complete',
          position: 'Graphic Deisgner',
          status:'Complete',
          like: 1,
          comments: [
            {
              id: 1,
              text: 'Some comment'
            }
          ]
        },
        {
          id: 2,
          text: 'HTML template Issue Complete',
          position: 'UX Writer',
          status:'In Progress',
          like: 1,
          comments: [
            {
              id: 2,
              text: 'Some comment'
            }
          ]
        },
      ]
    },
  ]

  private board: Column[] = this.initBoard
  private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  getBoard$() {
    // console.log(this.board$.asObservable());
    return this.board$.asObservable()
  }

  changeColumnColor(color: string, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.color = color;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  addColumn(title: string) {
    const newColumn: Column = {
      id: Date.now(),
      title: title,
      color: 'rgb(237 223 255 / 50%)',
      bg: 'primary',
      list: [],
    };
    this.board = [...this.board, newColumn];
    this.board$.next([...this.board]);
  }

  addCard(text: string, position: string, status:string, columnId: number) {
    const newCard: Card = {
      id: Date.now(),
      text,
      status,
      position,
      like: 0,
      comments: [],
    };

    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = [newCard, ...column.list];
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  deleteColumn(columnId: any) {
    this.board = this.board.filter((column: Column) => column.id !== columnId);
    this.board$.next([...this.board]);
  }

  deleteCard(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id !== cardId);
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  changeLike(cardId: number, columnId: number, increase: boolean) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            if (increase) {
              card.like++;
            } else {
              if (card.like > 0) {
                card.like--;
              }
            }
          }
          return card;
        });
        column.list = list;
        return column;
      } else {
        return column;
      }
    });

    this.board$.next([...this.board]);
  }

  addComment(columnId: number, cardId: number, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            const newComment = {
              id: Date.now(),
              text,
            };
            card.comments = [newComment, ...card.comments];
          }
          return card;
        });
        column.list = list;
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

  deleteComment(columnId: any, itemId: any, commentId: any) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((item) => {
          if (item.id === itemId) {
            item.comments = item.comments.filter((comment: Comment) => {
              return comment.id !== commentId
            })
          }
          return item
        })
        column.list = list
      }
      return column
    })
    this.board$.next([...this.board])
  }
}
