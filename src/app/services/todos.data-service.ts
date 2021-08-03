import { BehaviorSubject, Observable } from "rxjs";
import { TodoItemModel } from "../components/models/todo.model";

export class TodosDataService {

  private items: TodoItemModel[] = [
    {
      id: '1',
      description: 'Make an API'
    },
    {
      id: '2',
      description: 'Update this Service to use the API'
    }
  ];

  private subject = new BehaviorSubject<TodoItemModel[]>(this.items);

  getTodoItems(): Observable<TodoItemModel[]> {
    return this.subject.asObservable();
  }

  add(description: string): void {
    // Call the API
    const newItem: TodoItemModel = { id: '99', description };
    this.items = [newItem, ...this.items];
    this.subject.next(this.items);
  }
}
