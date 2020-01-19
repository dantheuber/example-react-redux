import { NAME } from './constants';
import actionTypeConstructor from '../util/action-type-constructor';

const ca = actionTypeConstructor(NAME);

export const INCREASE_COUNT = ca('INCREASE_COUNT');
export const DECREASE_COUNT = ca('DECREASE_COUNT');
