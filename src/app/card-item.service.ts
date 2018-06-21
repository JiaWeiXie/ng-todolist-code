import { Injectable } from '@angular/core';

export interface CardItem {
  title: string;
  content: string;
}

export enum CardItemStatus {
  toDo = 'todo',
  doing = 'doing',
  done = 'done',
}

@Injectable({
  providedIn: 'root'
})
export class CardItemService {

  toDoItems: CardItem[] = [];
  doingItem: CardItem[] = [];
  doneItems: CardItem[] = [];

  draggedCardItem: CardItem;
  draggedIndex: number;
  draggedStatus: CardItemStatus;

  constructor() {
    this.refresh();
    this.dragReset();
  }

  dragStart(cardItem: CardItem) {
    console.log('dragStart');
    this.draggedCardItem = cardItem;
  }

  dragReset() {
    this.draggedCardItem = null;
    this.draggedIndex = null;
    this.draggedStatus = null;
  }

  drop(status: CardItemStatus) {
    if (this.draggedCardItem && this.draggedStatus !== status) {
      this.inert(status, this.draggedCardItem);
      this.remove(this.draggedStatus, this.draggedIndex);
      this.dragReset();
    }
  }

  refresh() {
    const tempToDos = localStorage.getItem(CardItemStatus.toDo);
    const tempDoings = localStorage.getItem(CardItemStatus.doing);
    const tempDone = localStorage.getItem(CardItemStatus.done);
    if (tempToDos != null) {
      this.toDoItems = JSON.parse(tempToDos);
    }
    if (tempDoings != null) {
      this.doingItem = JSON.parse(tempDoings);
    }
    if (tempDone != null) {
      this.doneItems = JSON.parse(tempDone);
    }
  }

  inert(status: CardItemStatus, catItem: CardItem) {
    const targetCardItems = localStorage.getItem(status);
    let cardItems: CardItem[] = [];
    if (targetCardItems != null) {
      cardItems = JSON.parse(targetCardItems);
    }
    cardItems.push(catItem);
    localStorage.setItem(status, JSON.stringify(cardItems));
    this.refresh();
  }

  remove(status: CardItemStatus, index: number) {
    const targetCardItems = localStorage.getItem(status);

    if (targetCardItems != null) {
      const cardItems: CardItem[] = JSON.parse(targetCardItems);
      cardItems.splice(index, 1);
      localStorage.setItem(status, JSON.stringify(cardItems));
    }

    this.refresh();
  }
}
