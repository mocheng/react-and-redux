import actionTypes from './actionTypes.js';

let nextTodoId = 0;

export default {
  addTodo: (text) => ({
    type: actionTypes.ADD,
    completed: false,
    id: nextTodoId++,
    text: text
  }),

  toggleTodo: (id) => ({
    type: actionTypes.TOGGLE,
    id: id
  })

}
