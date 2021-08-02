import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list-entry',
  templateUrl: './todo-list-entry.component.html',
  styleUrls: ['./todo-list-entry.component.css']
})
export class TodoListEntryComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<string>();
  form !: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      item: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get item() { return this.form.get('item'); }
  addItem(focusMe: HTMLInputElement) {
    if (this.form.invalid) {
      console.warn('There are errors');
      focusMe.focus();
    } else {
      //console.log(this.form.value);
      this.itemAdded.emit(this.item?.value);
      focusMe.value = '';
      this.form.reset();
      focusMe.focus();
    }

  }

}
