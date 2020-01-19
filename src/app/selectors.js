import { NAME } from './constants';
import baseSelector from '../util/base-selector';

const select = baseSelector(NAME);

export const count = select('count');
