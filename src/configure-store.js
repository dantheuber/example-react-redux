import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { routerMiddleware, routerEnhancer } from './router';
import setInitialLocation from './router/set-initial-location';

export default function configureStore(initialState) {
  const middleware = [
    thunk,
    routerMiddleware,
  ];
  
  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }

  const store = createStore(
    reducer,
    initialState,
    compose(routerEnhancer, applyMiddleware(...middleware))
  );
  
  setInitialLocation(store);
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
