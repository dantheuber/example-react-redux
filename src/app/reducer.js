import { combineReducers } from 'redux';
import * as types from './action-types';

const count = (state = 0, action) => {
  switch (action.type) {
    case types.INCREASE_COUNT:
      return state + 1;
    case types.DECREASE_COUNT:
      return state - 1;
    default:
      return state;
  }
};

export const reducer = combineReducers({
  count,
});
