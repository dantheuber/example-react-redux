import { initializeCurrentLocation } from 'redux-little-router';
import { redirectToCount } from './actions';

export default function setInitialLocation(store) {
  const state = store.getState();
  const initialLocation = state.router;

  if (initialLocation) {
    store.dispatch(initializeCurrentLocation(initialLocation));
    if (initialLocation.pathName === '/') {
      store.dispatch(redirectToCount());
    }
  }
}