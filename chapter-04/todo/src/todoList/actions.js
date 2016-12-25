import actionTypes from './actionTypes.js';

let nextTodoId = 0;

export default {
  add: (text) => ({
    type: actionTypes.ADD,
    completed: false,
    id: nextTodoId++,
    text: text
  }),

  toggle: (id) => ({
    type: actionTypes.TOGGLE,
    id: id
  })

}
