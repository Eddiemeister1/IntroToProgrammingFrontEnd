import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectLearningListItems } from 'src/app/reducers';
import { LearningListItem } from '../models/learning.models';

@Component({
  selector: 'app-learning-path-list',
  templateUrl: './learning-path-list.component.html',
  styleUrls: ['./learning-path-list.component.css']
})
export class LearningPathListComponent implements OnInit {

  items$!: Observable<LearningListItem[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // TODO - select same data that returns as a LearningListItem[]
    this.items$ = this.store.select(selectLearningListItems);
  }

}
