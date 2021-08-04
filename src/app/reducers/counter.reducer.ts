import { Action, createReducer, on } from "@ngrx/store";
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
}

export const reducer = createReducer(
  initialState,
  on(actions.countIncremented, (state, action) => ({ current: state.current + 1 })),
  on(actions.countDecremented, (state, action) => ({ current: state.current - 1 }))
)

export function counterReducer(state: CounterState = initialState, action: Action): CounterState {
  return reducer(state, action);
}
