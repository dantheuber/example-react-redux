import { combineReducers } from 'redux';
import { routerReducer } from './router';
import { NAME as APP, reducer as appReducer } from './app';

export default combineReducers({
  [APP]: appReducer,
  router: routerReducer,
});
