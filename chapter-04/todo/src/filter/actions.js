import {SET_FILTER} from './actionTypes.js';

let nextTodoId = 0;

export const setFilter = filterType => ({
  type: SET_FILTER,
  filter: filterType
});
