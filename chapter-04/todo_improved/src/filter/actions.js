import {SET_FILTER} from './actionTypes.js';

export const setFilter = filterType => ({
  type: SET_FILTER,
  filter: filterType
});
