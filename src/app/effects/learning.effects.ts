import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import * as actions from '../actions/learning.actions';
import { LearningEntity } from "../reducers/learning.reducer";


@Injectable()
export class LearningEffects {

  fakeDataForNow: LearningEntity[] = [
    { id: '1', topic: 'Redux', competency: 'Angular' },
    { id: '2', topic: 'Git', competency: 'SC', notes: 'This stuff is RAD' }
  ];
  loadTheData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadLearningData),
      map(() => actions.loadLearningDataSucceeded({ payload: this.fakeDataForNow }))
    )
  );

  fakeId = 1;
  //give a fake id to the learning item
  learningItemCreated = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.learningItemCreated),
      map(fakeItem => {
        const tempItem: LearningEntity = {
          id: 'TEMPID' + this.fakeId++,
          ...fakeItem.payload
        };
        return actions.temporaryLearningItemCreated({ payload: tempItem })
      })
    ))

  constructor(private actions$: Actions) {
  }
}
