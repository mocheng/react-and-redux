import {ADD_TODO, TOGGLE_TODO}from './actionTypes.js';

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    }
    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
           return {...todoItem, completed: !todoItem.completed};
        } else {
          return todoItem;
        }
      })
    }
    default: {
      return state;
    }
  }
}
