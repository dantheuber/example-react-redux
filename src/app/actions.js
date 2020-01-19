import { INCREASE_COUNT, DECREASE_COUNT } from './action-types';

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});
