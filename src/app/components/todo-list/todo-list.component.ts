import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosDataService } from 'src/app/services/todos.data-service';
import { TodoItemModel } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items$!: Observable<TodoItemModel[]>;
  constructor(private service: TodosDataService) { }

  ngOnInit(): void {
    this.items$ = this.service.getTodoItems();
  }

  addToList(description: string) {
    this.service.add(description);
  }
}
