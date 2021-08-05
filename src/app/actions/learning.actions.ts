import { createAction, props } from "@ngrx/store";
import { LearningEntity } from "../reducers/learning.reducer";

// "Initiator Command"

export const loadLearningData = createAction(
  '[app learning] load learning data'
);

//success

export const loadLearningDataSucceeded = createAction(
  '[app learning] load learning data succeeded',
  props<{ payload: LearningEntity[] }>()
);

// error
export const loadLearningDataFailed = createAction(
  '[app learning] load learning data failed',
  props<{ errorMessage: string }>()
);
