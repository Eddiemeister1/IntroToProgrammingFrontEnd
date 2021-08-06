import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/learning.actions';

export interface LearningEntity {
  id: string;
  topic: string;
  competency: string;
  notes?: string;
}

export interface LearningState extends EntityState<LearningEntity> {

}

export const adapter = createEntityAdapter<LearningEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadLearningDataSucceeded, (state, action) => adapter.setMany(action.payload, state)),
  on(actions.temporaryLearningItemCreated, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.learningItemSaved, (state, action) => adapter.updateOne({
    id: action.oldId,
    changes: {
      id: action.payload.id
    }
  }, state))
);

export function reducer(state: LearningState = initialState, action: Action): LearningState {
  return reducerFunction(state, action);
}



