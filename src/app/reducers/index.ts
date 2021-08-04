import { ActionReducerMap } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers = {
  counter: fromCounter.counterReducer
}

//selector functions

export const selectCounterCurrent = (state: AppState) => state.counter.current;
