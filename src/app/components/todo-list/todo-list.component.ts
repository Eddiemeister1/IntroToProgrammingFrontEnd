import { Component, OnInit } from '@angular/core';
import { TodoItemModel } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items: TodoItemModel[] = [
    { description: 'My Twinkies' },
    { description: 'Clean Mom\'s Car' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addToList(description: string) {
    this.items = [{ description }, ...this.items];
  }
}
