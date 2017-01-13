import {createSelector} from 'reselect';
import {FilterTypes} from '../constants.js';

const getFilter = (state) => state.filter;
const getTodos = (state) => state.todos;

export const selectVisibleTodos = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case FilterTypes.ALL:
        return todos;
      case FilterTypes.COMPLETED:
        return todos.filter(item => item.completed);
      case FilterTypes.UNCOMPPLETED:
        return todos.filter(item => !item.completed);
      default:
        throw new Error('unsupported filter');
    }
  }
);
