import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { learningItemCreated } from 'src/app/actions/learning.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-learning-path-entry',
  templateUrl: './learning-path-entry.component.html',
  styleUrls: ['./learning-path-entry.component.css']
})
export class LearningPathEntryComponent implements OnInit {

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      topic: ['', [Validators.required]],
      competency: ['', [Validators.required]],
      notes: ['']
    })

  }

  get topic() { return this.form.get('topic') }
  get competency() { return this.form.get('competency') }
  ngOnInit(): void {
  }
  submit() {
    //todo: Dispatch that action.
    if (this.form.valid) {
      this.store.dispatch(learningItemCreated({ payload: this.form.value }));
      this.form.reset();
    }
  }
}
