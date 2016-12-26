import actionTypes from './actionTypes.js';

export default (state = [], action) => {
  switch(action.type) {
    case actionTypes.ADD: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    }
    case actionTypes.TOGGLE: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id) {
           return {...todoItem, completed: !todoItem.completed};
        } else {
          return todoItem;
        }
      })
    }
  }

  return state;
}
