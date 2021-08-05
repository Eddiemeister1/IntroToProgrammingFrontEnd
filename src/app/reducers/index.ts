import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromLearning from './learning.reducer';
export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers = {
  counter: fromCounter.counterReducer,
  learning: fromLearning.reducer
}

//selector functions

export const selectCounterCurrent = (state: AppState) => state.counter.current;

