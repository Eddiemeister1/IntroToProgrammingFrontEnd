import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListEntryComponent } from './components/todo-list-entry/todo-list-entry.component';
import { TodoListItemsComponent } from './components/todo-list-items/todo-list-items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TodosDataService } from './services/todos.data-service';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListEntryComponent,
    TodoListItemsComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TodosDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
