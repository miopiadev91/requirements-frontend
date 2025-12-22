export interface Comment {
  id: number,
  text: string,
}

export interface Card {
  id: number,
  text: string,
  like: number,
  position?: string,
  status?:string,
  comments: Comment[]
}

export interface Column {
  id: number,
  title: string,
  color: string,
  bg?: string,
  list: Card[]
}
