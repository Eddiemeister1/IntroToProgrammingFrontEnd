import { Component, Input, OnInit } from '@angular/core';
import { TodoItemModel } from '../models/todo.model';

@Component({
  selector: 'app-todo-list-items',
  templateUrl: './todo-list-items.component.html',
  styleUrls: ['./todo-list-items.component.css']
})
export class TodoListItemsComponent implements OnInit {

  @Input() todoList: TodoItemModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
