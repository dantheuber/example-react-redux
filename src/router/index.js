import { routerForBrowser } from 'redux-little-router';
import { routes } from './routes';

const { reducer, middleware, enhancer } = routerForBrowser({ routes });

export const routerReducer = reducer;
export const routerMiddleware = middleware;
export const routerEnhancer = enhancer;