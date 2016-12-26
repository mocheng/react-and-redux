import actionTypes from './actionTypes.js';

let nextTodoId = 0;

export default {
  setFilter: (filterType) => ({
    type: actionTypes.SET_FILTER,
    filter: filterType
  }),
}
