import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardItemService, CardItemStatus } from '../card-item.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  username: String;
  toDoTitle = ['待處理', CardItemStatus.toDo];
  doingTitle = ['處理中', CardItemStatus.doing];
  doneTitle = ['已完成', CardItemStatus.done];

  constructor(private actRoute: ActivatedRoute,
     public cardItemService: CardItemService) {

  }

  ngOnInit() {
    this.username = this.actRoute.snapshot.params.username;
  }

}
