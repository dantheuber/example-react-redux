import { DEFAULT_PAGE_TITLE } from './constants';

export const getQuery = state => state.router.query || {};
export const getParams = state => state.router.params || {};
export const getPathname = state => state.router.pathname;
export const pageTitle = state => (state.router.result && state.router.result.title) || DEFAULT_PAGE_TITLE;
export const isRootPath = state => state.router.pathname === '/';
