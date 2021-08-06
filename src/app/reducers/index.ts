import { ActionReducerMap, createSelector } from '@ngrx/store';
import { LearningListItem } from '../components/models/learning.models';
import * as fromCounter from './counter.reducer';
import * as fromLearning from './learning.reducer';
export interface AppState {
  counter: fromCounter.CounterState,
  learning: fromLearning.LearningState
}

export const reducers = {
  counter: fromCounter.counterReducer,
  learning: fromLearning.reducer
}

//selector functions

//1. Feature Selector (optional - only if you are using feature modules)

//2. Create a function (selector) for each main branch of your state.

const selectCounterBranch = (state: AppState) => state.counter;
const selectLearningBranch = (state: AppState) => state.learning;

//3. Any helpers (non-exported selectors)

const { selectAll: selectLearningEntityArray } = fromLearning.adapter.getSelectors(selectLearningBranch);

selectLearningEntityArray
//4. Whatever your component needs. // createSelector does "memoization" = which is like caching (like "take a memo")
export const selectCounterCurrent = createSelector(
  selectCounterBranch,
  c => c.current
)


//TODO - select some data that returns a LearningListItem[]

export const selectLearningListItems = createSelector(
  selectLearningEntityArray,
  items => items as LearningListItem[]
)
