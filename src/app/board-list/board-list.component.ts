import { Component, OnInit, Input } from '@angular/core';
import { CardItem, CardItemService, CardItemStatus } from '../card-item.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  @Input() title: string;
  @Input() status: CardItemStatus;
  carItems: CardItem[];

  dialogVisible = false;

  dialogTitle = '';
  dialogContent = '';

  constructor(public carItemService: CardItemService) {}

  ngOnInit() {
    this.refreshItems();
  }

  refreshItems() {
    switch (this.status) {
      case CardItemStatus.toDo: {
        this.carItems = this.carItemService.toDoItems;
        break;
      }
      case CardItemStatus.doing: {
        this.carItems = this.carItemService.doingItem;
        break;
      }
      case CardItemStatus.done: {
        this.carItems = this.carItemService.doneItems;
        break;
      }
    }
  }

  showDialog() {
    this.dialogVisible = true;
  }

  dialogOK() {
    const obj = { title: this.dialogTitle, content: this.dialogContent };
    this.dialogTitle = '';
    this.dialogContent = '';
    this.carItemService.inert(this.status, obj);
    this.dialogVisible = false;
    this.refreshItems();
  }

  deleteCard(event: any, index: number) {
    this.carItemService.remove(this.status, index);
    this.refreshItems();
  }

  dragStart(event: any, index: number) {
    this.carItemService.draggedCardItem = this.carItems[index];
    this.carItemService.draggedIndex = index;
    this.carItemService.draggedStatus = this.status;
  }

  dragEnd(event: any) {
    this.ngOnInit();
  }

  drop(event: any) {
    this.carItemService.drop(this.status);
    this.refreshItems();
  }
}
