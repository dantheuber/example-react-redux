import { push } from 'redux-little-router';

export const redirectToCount = () => (dispatch) => dispatch(push('/count'));
