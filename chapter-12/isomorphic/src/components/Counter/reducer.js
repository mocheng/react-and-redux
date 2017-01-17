import {INCREMENT, DECREMENT} from './actionTypes.js';

export default (state = {}, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state
  }
}
